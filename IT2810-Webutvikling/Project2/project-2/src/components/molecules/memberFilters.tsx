import SearchBar from "../atoms/searchBar";
import "../components-style/memberFilters.css";
import MemberSortOrder from "../atoms/memberSortOrder";
import { memberInfo, alphabeticalMembers } from "./memberWindow";
import ResetButton from "../atoms/resetButton";

interface IMemberFilters {
    members: memberInfo[];
    setMembers: (members: memberInfo[]) => void;
    filteredMembers: memberInfo[];
    setFilteredMembers: (filteredMembers: memberInfo[]) => void;
}

//filter members by the search made in the searchbar
function filterBySearch(
    members: memberInfo[],
    setFilteredMembers: (filteredMembers: memberInfo[]) => void
) {
    let nameQuery = (
        document.getElementById("memberSearchBar") as HTMLInputElement
    ).value.toLowerCase();
    let memberList: memberInfo[] = [];
    //get all the members that matches with the search
    members
        .filter((member) =>
            member.name.toLowerCase().includes(nameQuery.trim())
        )
        .forEach((member) => memberList.push(member));
    //set the members displayed to the new filtered list of members
    setFilteredMembers(memberList);
}

//reset filters to its original state so all mmebers are displayed
function resetFilteredMembers(
    members: memberInfo[],
    setFilteredMembers: (filteredMembers: memberInfo[]) => void,
    setMembers: (members: memberInfo[]) => void
) {
    (document.getElementById("memberSearchBar") as HTMLInputElement).value = "";
    setFilteredMembers(alphabeticalMembers.slice(0));
    setMembers(alphabeticalMembers.slice(0));
}

//Component that surrounds all member filters
export default function MemberFilters({
    members,
    setMembers,
    filteredMembers,
    setFilteredMembers,
}: IMemberFilters) {
    return (
        <div id="memberFilters">
            <SearchBar
                id="memberSearchBar"
                placeholderText="Search for member"
                buttonText="Search"
                handleClick={() => filterBySearch(members, setFilteredMembers)}
            ></SearchBar>
            <div id="memberFilterElements">
                <MemberSortOrder
                    members={members}
                    filteredMembers={filteredMembers}
                    setMembers={setMembers}
                    setFilteredMembers={setFilteredMembers}
                ></MemberSortOrder>
                <ResetButton
                    handleClick={() =>
                        resetFilteredMembers(members, setFilteredMembers, setMembers)
                    }
                ></ResetButton>
            </div>
        </div>
    );
}
