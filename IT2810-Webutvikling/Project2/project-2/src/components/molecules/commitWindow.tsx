import '../components-style/commitWindow.css';
import CommitDisplay from '../atoms/commitDisplay';
import CommitDateFilter from '../atoms/commitDateFilter';
import { useEffect, useState } from 'react';
import CommitGraph from '../atoms/commitGraph';
import ResetButton from "../atoms/resetButton";
import { useNavigate } from 'react-router-dom';

//object type for storing commit information
export type commitInfo = {
    authorName: string;
    title: string;
    createdAt: Date;
};

//resets the filters that are active on commits so that all commits are displayed
function resetFilteredCommits(
    commits: commitInfo[],
    setFilteredCommits: (filteredCommits: commitInfo[]) => void
) {
    setFilteredCommits(commits);
    (document.getElementById("dropdownFromDateInput") as HTMLInputElement).value = "";
    (document.getElementById("dropdownToDateInput") as HTMLInputElement).value = "";
}

//Component for assembling commit-components, commitDisplays for each commit along with relevant filters and a graph
export default function CommitWindow(){
    let navigate = useNavigate();
    const [commits, setCommits] = useState<commitInfo[]>([]);
    const [members, setMembers] = useState<any[]>([]);
    const [filteredCommits, setFilteredCommits] = useState<commitInfo[]>([]);
    var commitPerMember = new Map();

    //Get all members from project
    useEffect(() => {
        fetch(sessionStorage.getItem('link0')+'/api/v4/projects/'+sessionStorage.getItem('link1')+'/members/all',{
            "method": "GET",
            "headers":{
                'Content-type': 'application/json',
                'Authorization': `Bearer ` + sessionStorage.getItem('key'),
            }
        })
        .then(response => response.json())
        .then((data) => {
            setMembers(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);
    //collect names of all members in project into a list
    const memberNames: string[] = []
    members.map((member) => {
        memberNames.push(member.name);
    })

    //get all (100) commits from project
    useEffect(() => {
        fetch(sessionStorage.getItem('link0')+'/api/v4/projects/'+sessionStorage.getItem('link1')+'/repository/commits?per_page=100',{
            "method": "GET",
            "headers":{
                'Content-type': 'application/json',
                'Authorization': `Bearer ` + sessionStorage.getItem('key'),
            }
        })
        .then(response => response.json())
        .then((data) => {
            //turn json into commitInfo objects
            let commitList: commitInfo[] = [];
                data.map(
                    (element: {
                        author_name: string;
                        title: string;
                        created_at: string;
                    }) => {
                        let singleCommit: commitInfo = {
                            authorName: element.author_name,
                            title: element.title,
                            createdAt: new Date(element.created_at),
                        };
                        return commitList.push(singleCommit);
                    }
                );
                //set state of commits to all commits fetched
                setCommits(commitList);
                //set state of the commits displayed to all commits fetched
                setFilteredCommits(commitList);
            
        })
        .catch((err) => {
            console.log(err.message);
            navigate("/page-not-found")
        });
    }, []);

    //place commit objects that are to be displayed into commmitDisplay-components
    const commitDisplays = filteredCommits.map((commit) => {
        return (
            <CommitDisplay
                name={commit.authorName}
                date={commit.createdAt.toDateString()}
                commitMessage={commit.title}
            />
        );
    });

    //Get number of commits from each member and add info to commitPerMember map
    for (let i = 0; i < memberNames.length; i++) {
        var commitNumber: number = 0;
        {filteredCommits.map((commit) => {
            if (memberNames[i] == commit.authorName) {   
                commitNumber += 1;
            }
        })}
        commitPerMember.set(memberNames[i], commitNumber)
    }

    //returns filters, graph and all commitDisplays
    return (
        <div id='commitContainer'>
            <div id='commitFilterContainer'>
                <CommitDateFilter
                commits={commits}
                setFilteredCommits={setFilteredCommits}
                ></CommitDateFilter>
                <ResetButton
                        handleClick={() =>
                            resetFilteredCommits(commits, setFilteredCommits)
                        }
                ></ResetButton>
            </div>
            <div id='chart'>
                <CommitGraph graphData={commitPerMember}></CommitGraph>
            </div>
            {commitDisplays}
        </div>
    );
}