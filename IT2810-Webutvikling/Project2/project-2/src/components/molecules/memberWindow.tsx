import "../components-style/memberWindow.css";
import MemberDisplay from "../atoms/memberDisplay";
import MemberFilters from "./memberFilters";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


//object type for storing member information
export type memberInfo = {
    name: string;
    createdAt: Date;
    avatar_url: string;
};

export var alphabeticalMembers: memberInfo[] = [];

//Component for assembling member-components, memberDisplays for each member along with relevant filters
export default function MemberWindow() {
    let navigate = useNavigate();
    const [members, setMembers] = useState<memberInfo[]>([]);
    const [filteredMembers, setFilteredMembers] = useState<memberInfo[]>([]);
    console.log("key:" + sessionStorage.getItem("key"));
    //Get all members from project
    useEffect(() => {
        fetch(sessionStorage.getItem('link0')+'/api/v4/projects/'+sessionStorage.getItem('link1')+'/members/all',{
            "method": "GET",
            "headers":{
                'Content-type': 'application/json',
                'Authorization': `Bearer ` + sessionStorage.getItem('key'),
            },
        }
        )
            .then((response) => response.json())
            .then((data) => {
                let memberList: memberInfo[] = [];
                //turn json into memberInfo objects
                data.map(
                    (element: {
                        name: string;
                        created_at: string;
                        avatar_url: string;
                    }) => {
                        let singleMember: memberInfo = {
                            name: element.name,
                            createdAt: new Date(element.created_at),
                            avatar_url: element.avatar_url,
                        };
                        return memberList.push(singleMember);
                    }
                );
                //sort the members alphabetically by name
                alphabeticalMembers = memberList.sort(function (a, b) {
                    return a.name.localeCompare(b.name);
                });
                //set state of members to all members fetched
                setMembers(alphabeticalMembers.slice(0));
                //set state of the members displayed to all members fetched
                setFilteredMembers(alphabeticalMembers.slice(0));
            })
            .catch((err) => {
                console.log(err.message);
                navigate("/page-not-found");
            });
    }, []);

    //place member objects that are to be displayed into memberDisplay-components
    const memberDisplays = filteredMembers.map((member) => {
        return (
            <MemberDisplay
                name={member.name}
                accessGranted={member.createdAt.toDateString()}
                image={member.avatar_url}
            ></MemberDisplay>
        );
    });
    //returns filters and all memberDisplays
    return (
        <div id="memberContainer">
            <MemberFilters
                members={members}
                setMembers={setMembers}
                filteredMembers={filteredMembers}
                setFilteredMembers={setFilteredMembers}
            ></MemberFilters>
            {memberDisplays}
        </div>
    );
}
