import { useEffect } from "react";
import IssueDateFilter, { checkIfSameDate } from "../atoms/issueDateFilter";
import IssueOrderToggle from "../atoms/issueOrderToggle";
import ResetButton from "../atoms/resetButton";
import SearchBar from "../atoms/searchBar";
import "../components-style/issueFilters.css";
import { issueInfo } from "./issueWindow";

interface IIssueFilters {
    issues: issueInfo[];
    setIssues: (issues: issueInfo[]) => void;
    setFilteredIssues: (filteredIssues: issueInfo[]) => void;
}

//takes in all issues and performs all active filters so that you are left with the issues that should be displayed
export function filterIssues(
    issues: issueInfo[],
    setFilteredIssues: (filteredIssues: issueInfo[]) => void,
    setDisplay: null | ((value: string) => void)
) {
    let newFilteredIssues = issues;
    //enter if something has been searched for in the search bar
    if (
        (document.getElementById("issueSearchBar") as HTMLInputElement)
            .value !== ""
    ) {
        newFilteredIssues = [];
        let nameQuery = (
            document.getElementById("issueSearchBar") as HTMLInputElement
        ).value.toLowerCase();
        //get all the issues that matches with the search
        issues
            .filter((issue) =>
                (
                    issue.iid.toString() +
                    " " +
                    issue.title.toLowerCase()
                ).includes(nameQuery.trim())
            )
            .forEach((issue) => newFilteredIssues.push(issue));
    }
    //enter if something has been input for in the search bar
    if (
        (document.getElementById("dropdownDateInput") as HTMLInputElement)
            .value !== ""
    ) {
        let dateQuery = (
            document.getElementById("dropdownDateInput") as HTMLInputElement
        ).value;
        let issueList: issueInfo[] = [];
        //get all the issues that matches with the date input if any issues are left after the search filter
        newFilteredIssues
            .filter((issue) =>
                checkIfSameDate(issue.createdAt, new Date(dateQuery))
            )
            .forEach((issue) => issueList.push(issue));
        newFilteredIssues = issueList;
    }
    //Set the issues displayed to the new filtered list of issues
    setFilteredIssues(newFilteredIssues);
    //hide drop down menu
    if (setDisplay) {
        setDisplay("none");
    }
}

//reset filters to its original state so all issues are displayed
function resetFilteredIssues(
    issues: issueInfo[],
    setFilteredIssues: (filteredIssues: issueInfo[]) => void
) {
    setFilteredIssues(issues);
    (document.getElementById("issueSearchBar") as HTMLInputElement).value = "";
    (document.getElementById("dropdownDateInput") as HTMLInputElement).value =
        "";
}

//Component that surrounds all issue filters
export default function IssueFilters({
    issues,
    setIssues,
    setFilteredIssues,
}: IIssueFilters) {
    //update the issues displayed each time the order is reversed
    useEffect(() => {
        filterIssues(issues, setFilteredIssues, null);
    }, [issues, setFilteredIssues]);

    //return the filters related to issues
    return (
        <div id="issueFilters">
            <SearchBar
                id="issueSearchBar"
                placeholderText="Search for issue"
                buttonText="Search"
                handleClick={() =>
                    filterIssues(issues, setFilteredIssues, null)
                }
            ></SearchBar>
            <div id="issueFilterElements">
                <IssueDateFilter
                    issues={issues}
                    setFilteredIssues={setFilteredIssues}
                ></IssueDateFilter>
                <IssueOrderToggle
                    issues={issues}
                    setIssues={setIssues}
                ></IssueOrderToggle>
                <ResetButton
                    handleClick={() =>
                        resetFilteredIssues(issues, setFilteredIssues)
                    }
                ></ResetButton>
            </div>
        </div>
    );
}
