import arrowWhite from "../media/arrowWhite.png";
import "../components-style/commitDateFilter.css";
import { commitInfo } from "../molecules/commitWindow";

interface ICommitFilters {
    commits: commitInfo[];
    setFilteredCommits: (filteredCommits: commitInfo[]) => void;
}

//filter commits by the dates input
function searchCommitDate(
    commits: commitInfo[],
    setFilteredCommits: (filteredCommits: commitInfo[]) => void
) {
    let fromDate = new Date(
        (
            document.getElementById("dropdownFromDateInput") as HTMLInputElement
        ).value
    );
    let toDate = new Date(
        (
            document.getElementById("dropdownToDateInput") as HTMLInputElement
        ).value
    );

    let commitList: commitInfo[] = [];

    //pushes commits that are in the desired timeframe to a new list
    commits
        .filter(
            (commit) =>
                (commit.createdAt > fromDate && commit.createdAt < toDate) ||
                checkIfSameDate(commit.createdAt, fromDate) ||
                checkIfSameDate(commit.createdAt, toDate)
        )
        .forEach((commit) => commitList.push(commit));

    //changes the displayed commits to the filtered commits
    setFilteredCommits(commitList);

    //hide the drop down menu
    let dropDownMenuFromDate = document.getElementById("calendarDate");
    if (dropDownMenuFromDate) {
        dropDownMenuFromDate.style.display = "none";
    }
}

//Check if the date input matches the date of the commit
function checkIfSameDate(first: Date, second: Date) {
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

//Toggle filters drop down menu visibility
export function dropDownDate() {
    let dropDownMenuFromDate = document.getElementById("calendarDate");
    if (dropDownMenuFromDate) {
        if (dropDownMenuFromDate.style.display === "none") {
            dropDownMenuFromDate.style.display = "block";
        } else {
            dropDownMenuFromDate.style.display = "none";
        }
    }
}

//Component for filtering commits by the timeframe they where committed
export default function CommitDateFilter({
    commits,
    setFilteredCommits,
}: ICommitFilters) {
    return (
        <div id="outerFilterBox">
            <h1 id="fromTo">From/To Date</h1>
            <div id="innerBox" onClick={dropDownDate}>
                <img src={arrowWhite} alt="down arrow" />
            </div>
            <div id="calendarDate" style={{ display: "none" }}>
                <div id="flexDiv">
                    <label>
                        From:<br></br>
                        <input
                            className="commitFilterInput"
                            id="dropdownFromDateInput"
                            type="date"
                        />
                    </label>
                    <label>
                        To:<br></br>
                        <input
                            className="commitFilterInput"
                            id="dropdownToDateInput"
                            type="date"
                        />
                    </label>
                    <button
                        id="dropDownDateButton"
                        onClick={() =>
                            searchCommitDate(commits, setFilteredCommits)
                        }
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
