import { useState } from "react";
import "../components-style/tabs.css";

interface ITabs {
    setMemberState: (state: string[]) => void;
    setCommitState: (state: string[]) => void;
    setIssueState: (state: string[]) => void;
    memberState: string[];
    commitState: string[];
    issueState: string[];
}

//Returns a component consisting of three tabs for navigating windows that displays members/commits/issues
export default function Tabs({
    setMemberState,
    setCommitState,
    setIssueState,
    memberState,
    commitState,
    issueState,
}: ITabs) {
    const [windowStates] = useState({
        initial: ["block", "40px", "#01C698"],
        other: ["none", "0px", "#02B188"],
    });

    //Changes position of issue tab to the right,
    //Moves potential previously focused tabs back to the left
    function focusIssue() {
        let member = document.getElementById("member");
        let commit = document.getElementById("commit");
        let issue = document.getElementById("issue");

        if (member) {
            member.style.paddingLeft = "0px";
            setMemberState(windowStates.other);
        }
        if (commit) {
            commit.style.paddingLeft = "0px";
            setCommitState(windowStates.other);
        }
        if (issue) {
            issue.style.paddingLeft = "40px";
            setIssueState(windowStates.initial);
        }
    }

    //Changes position of commit tab to the right,
    //Moves potential previously focused tabs back to the left
    function focusCommit() {
        let member = document.getElementById("member");
        let commit = document.getElementById("commit");
        let issue = document.getElementById("issue");

        if (member) {
            member.style.paddingLeft = "0px";
            setMemberState(windowStates.other);
        }
        if (commit) {
            commit.style.paddingLeft = "40px";
            setCommitState(windowStates.initial);
        }
        if (issue) {
            issue.style.paddingLeft = "0px";
            setIssueState(windowStates.other);
        }
    }

    //Changes position of member tab to the right,
    //Moves potential previously focused tabs back to the left
    function focusMember() {
        let member = document.getElementById("member");
        let commit = document.getElementById("commit");
        let issue = document.getElementById("issue");

        if (member) {
            member.style.paddingLeft = "40px";
            setMemberState(windowStates.initial);
        }
        if (commit) {
            commit.style.paddingLeft = "0px";
            setCommitState(windowStates.other);
        }
        if (issue) {
            issue.style.paddingLeft = "0px";
            setIssueState(windowStates.other);
        }
    }

    //returns the tabs used on screens with more than 600px width
    return (
        <div id="tabs">
            <div
                id="member"
                onClick={focusMember}
                style={{ paddingLeft: memberState[1] }}
                className="tab"
            >
                Members
            </div>
            <div
                id="commit"
                onClick={focusCommit}
                style={{ paddingLeft: commitState[1] }}
                className="tab"
            >
                Commits
            </div>
            <div
                id="issue"
                onClick={focusIssue}
                style={{ paddingLeft: issueState[1] }}
                className="tab"
            >
                Issues
            </div>
        </div>
    );
}
