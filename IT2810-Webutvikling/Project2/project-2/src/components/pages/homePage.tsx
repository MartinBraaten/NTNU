import "../components-style/homePage.css";
import ExploreForm from "../molecules/exploreForm";
import DownArrow from "../atoms/downArrow";
import UpArrow from "../atoms/upArrow";
import Tabs from "../atoms/tabs";
import MemberWindow from "../molecules/memberWindow";
import CommitWindow from "../molecules/commitWindow";
import IssueWindow from "../molecules/issueWindow";
import MobileTab from "../atoms/mobileTab";
import headerImage from "../media/headerImage.png";

import { useState } from "react";
import Switch from "../atoms/switch";
import { useNavigate } from "react-router-dom";

//slides down the drop down menu when clicking on the down arrow
export function slideDown() {
    let container = document.getElementById("slideDown");
    container?.setAttribute("id", "slideDownAnimation");

    let arrow = document.getElementById("downArrow");
    if (arrow != null) {
        arrow.style.display = "none";
    }
    arrow = document.getElementById("upArrow");
    if (arrow != null) {
        arrow.style.display = "block";
    }
}

//slides up the drop down menu when clicking on the up arrow
export function slideUp() {
    let container = document.getElementById("slideDownAnimation");
    container?.setAttribute("id", "slideDown");

    let arrow = document.getElementById("upArrow");
    if (arrow != null) {
        arrow.style.display = "none";
    }
    arrow = document.getElementById("downArrow");
    if (arrow != null) {
        arrow.style.display = "block";
    }
}

interface IHomePage {
    repositoryName: string | null;
    handleClick: () => void;
    switchState: string;
}

// Homepage component
export default function HomePage({ repositoryName, handleClick, switchState }: IHomePage) {
    let [memberState, setMemberState] = useState<string[]>(["block", "40px", "#01C698"]);
    let [commitState, setCommitState] = useState<string[]>(["none", "0px", "#02B188"]);
    let [issueState, setIssueState] = useState<string[]>(["none", "0px", "#02B188"]);
    let navigate = useNavigate();
    return (
        <div id="homePage">
            <div id="headerContainer">
                <img
                    id="headerImage"
                    src={headerImage}
                    alt="GitLab header"
                ></img>
                <div id="headerContent">
                    <h2 id="homeHeader" onClick={() => navigate("/")}>
                        Git<span id="homeSplore">splore</span>
                    </h2>
                    <h3 id="homeSubtitle">Explore another repository?</h3>
                    <div id="arrowContainer">
                        <DownArrow></DownArrow>
                        <UpArrow></UpArrow>
                    </div>
                    <div id="toggleSwitchContainer">
                        <Switch handleClick={handleClick} switchState={switchState} />
                    </div>
                </div>
            </div>
            <div id="slideDown">
                <ExploreForm></ExploreForm>
            </div>
            <h1 id="repoName">{repositoryName}</h1>
            <div id="bigTabs">
                <Tabs
                    setCommitState={setCommitState}
                    setIssueState={setIssueState}
                    setMemberState={setMemberState}
                    memberState={memberState}
                    commitState={commitState}
                    issueState={issueState}
                ></Tabs>
            </div>
            <MobileTab
                setCommitState={setCommitState}
                setIssueState={setIssueState}
                setMemberState={setMemberState}
                memberState={memberState}
                commitState={commitState}
                issueState={issueState}
            />

            <div id="memberWindow" style={{ display: memberState[0] }}>
                <MemberWindow></MemberWindow>
            </div>
            <div id="commitWindow" style={{ display: commitState[0] }}>
                <CommitWindow></CommitWindow>
            </div>
            <div id="issueWindow" style={{ display: issueState[0] }}>
                <IssueWindow></IssueWindow>
            </div>
        </div>
    );
}
