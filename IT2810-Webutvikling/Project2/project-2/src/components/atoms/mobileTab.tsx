import { useState } from "react";
import "../components-style/mobileTab.css";

interface IMobileTab {
    setMemberState: (state: string[]) => void;
    setCommitState: (state: string[]) => void;
    setIssueState: (state: string[]) => void;
    memberState: string[];
    commitState: string[];
    issueState: string[];
}

//Returns a component consisting of three tabs for navigating windows that displays members/commits/issues
export default function MobileTab({
    setMemberState,
    setCommitState,
    setIssueState,
    memberState,
    commitState,
    issueState,
}: IMobileTab) {
    const [windowStates] = useState({
        initial: ["block", "40px", "#01C698"],
        other: ["none", "0px", "#02B188"],
    });

    //Changes colour of member tab to a lighter colour,
    //changes colour to the default one for the other tabs
    function handleClickMembers() {
        const members = document.getElementById("members");
        const commits = document.getElementById("commits");
        const issues = document.getElementById("issues");

        if (members) {
            setMemberState(windowStates.initial);
        }
        if (commits) {
            setCommitState(windowStates.other);
        }
        if (issues) {
            setIssueState(windowStates.other);
        }
    }

    //Changes colour of commits tab to a lighter colour,
    //changes colour to the default one for the other tabs
    function handleClickCommits() {
        const members = document.getElementById("members");
        const commits = document.getElementById("commits");
        const issues = document.getElementById("issues");

        if (members) {
            setMemberState(windowStates.other);
        }
        if (commits) {
            setCommitState(windowStates.initial);
        }
        if (issues) {
            setIssueState(windowStates.other);
        }
    }

    //Changes colour of issues tab to a lighter colour,
    //changes colour to the default one for the other tabs
    function handleClickIssues() {
        const members = document.getElementById("members");
        const commits = document.getElementById("commits");
        const issues = document.getElementById("issues");

        if (members) {
            setMemberState(windowStates.other);
        }
        if (commits) {
            setCommitState(windowStates.other);
        }
        if (issues) {
            setIssueState(windowStates.initial);
        }
    }

    //returns the tabs used on screens with less than 600px width
    return (
        <div id="mobileTabs">
            <button
                className="mobileTabClass"
                onClick={handleClickMembers}
                style={{ backgroundColor: memberState[2] }}
                id={"members"}
            >
                Members
            </button>
            <button
                className="mobileTabClass"
                onClick={handleClickCommits}
                style={{ backgroundColor: commitState[2] }}
                id={"commits"}
            >
                Commits
            </button>
            <button
                className="mobileTabClass"
                onClick={handleClickIssues}
                style={{ backgroundColor: issueState[2] }}
                id={"issues"}
            >
                Issues
            </button>
        </div>
    );
}
