import { useState } from "react";
import "../components-style/issueDateFilter.css";
import arrowWhite from "../media/arrowWhite.png";
import { filterIssues } from "../molecules/issueFilters";
import { issueInfo } from "../molecules/issueWindow";

interface IIssueDateFilter {
    issues: issueInfo[];
    setFilteredIssues: (issues: issueInfo[]) => void;
}

//check if the date input matches the date on the issue
export function checkIfSameDate(first: Date, second: Date) {
    if (
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    ) {
        return true;
    } else {
        return false;
    }
}

//Component for filtering issues by a specific date
export default function IssueDateFilter({
    issues,
    setFilteredIssues,
}: IIssueDateFilter) {
    const [states] = useState({
        initial: "none",
        other: "block",
    });

    //toggles the visibility of the filter drop down menu
    function toggleDisplay(display: string) {
        if (display === states.initial) {
            setDisplay(states.other);
        } else {
            setDisplay(states.initial);
        }
    }
    let [display, setDisplay] = useState<string>("none");

    //returns the date filter
    return (
        <div id="outerFilterIssueSortBox">
            <h1>Date</h1>
            <div id="innerBox" onClick={() => toggleDisplay(display)}>
                <img src={arrowWhite} alt="down arrow" />
            </div>
            <div id="calendar" style={{ display: display }}>
                <div id="flexFilterIssueSortDiv">
                    <input id="dropdownDateInput" type="date" />
                    <button
                        id="dropDownDateButton"
                        onClick={() =>
                            filterIssues(issues, setFilteredIssues, setDisplay)
                        }
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
