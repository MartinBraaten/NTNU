import "../components-style/memberSortOrder.css";
import arrowWhite from "../media/arrowWhite.png";
import { memberInfo } from "../molecules/memberWindow";

interface IMemberSortOrder {
    members: memberInfo[];
    filteredMembers: memberInfo[];
    setMembers: (members: memberInfo[]) => void;
    setFilteredMembers: (filteredMembers: memberInfo[]) => void;
}

function accessGranted(
    members: memberInfo[],
    setMembers: (filteredMembers: memberInfo[]) => void,
    filteredMembers: memberInfo[],
    setFilteredMembers: (filteredMembers: memberInfo[]) => void
) {
    let accessGrantedFilteredMembers = filteredMembers.sort(function (a, b) {
        return a.createdAt.getTime() - b.createdAt.getTime();
    });
    setFilteredMembers(accessGrantedFilteredMembers.slice(0));

    let accessGrantedMembers = members.sort(function (a, b) {
        return a.createdAt.getTime() - b.createdAt.getTime();
    });
    setMembers(accessGrantedMembers.slice(0));
    let dropDownMenu = document.getElementById("sortAlternatives");
    if (dropDownMenu) {
        dropDownMenu.style.display = "none";
    }
}

//sort the members by their names in alphabetical order
function alphabetical(
    members: memberInfo[],
    filteredMembers: memberInfo[],
    setMembers: (members: memberInfo[]) => void,
    setFilteredMembers: (members: memberInfo[]) => void
) {
    //sorts the visible members in alphabetical order
    let alphabeticalFilteredMembers = filteredMembers.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    setFilteredMembers(alphabeticalFilteredMembers.slice(0));

    //sorts the full list of members in alphabetical order so that it has the right order when called upon by other functions
    let alphabeticalMembers = members.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    setMembers(alphabeticalMembers.slice(0));

    //hide the drop down menu
    let dropDownMenu = document.getElementById("sortAlternatives");
    if (dropDownMenu) {
        dropDownMenu.style.display = "none";
    }
}

//Toggles visibility of the drop down menu
function dropDown() {
    let dropDownMenu = document.getElementById("sortAlternatives");
    if (dropDownMenu) {
        if (dropDownMenu?.style.display === "none") {
            dropDownMenu.style.display = "block";
        } else {
            dropDownMenu.style.display = "none";
        }
    }
}

//Component that sorts the visible members alphabetically or by the date they got granted access to the project
export default function MemberSortOrder({
    members,
    filteredMembers,
    setMembers,
    setFilteredMembers,
}: IMemberSortOrder) {
    return (
        <div id="outerFilterMemberSortBox">
            <h1>Sort</h1>
            <div id="innerBox" onClick={dropDown}>
                <img src={arrowWhite} alt="down arrow" />
            </div>
            <div id="sortAlternatives" style={{ display: "none" }}>
                <div id="flexSortAlternativesDiv">
                    <button
                        onClick={() =>
                            alphabetical(
                                members,
                                filteredMembers,
                                setMembers,
                                setFilteredMembers
                            )
                        }
                        className="alternative"
                    >
                        Alphabetical
                    </button>
                    <button
                        onClick={() =>
                            accessGranted(
                                members,
                                setMembers,
                                filteredMembers,
                                setFilteredMembers
                            )
                        }
                        className="alternative"
                    >
                        Access granted date
                    </button>
                </div>
            </div>
        </div>
    );
}
