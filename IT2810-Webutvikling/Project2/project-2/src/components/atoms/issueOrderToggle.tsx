import { useState } from "react";
import { decodeEntity } from "html-entities";
import "../components-style/toggle.css";
import { issueInfo } from "../molecules/issueWindow";

interface IIssueOrderToggle {
    issues: issueInfo[];
    setIssues: (issues: issueInfo[]) => void;
}

//Component that let's you toggle between "new to old" or "old to new" order on issues
export default function IssueOrderToggle({
    issues,
    setIssues,
}: IIssueOrderToggle) {
    const [states] = useState({
        initial: "&#8595;",
        other: "&#8593;",
    });

    //toggles the arrow on the toggle button between up and down arrow
    function toggleArrow(value: string) {
        if (value === states.initial) {
            setValue(states.other);
        } else {
            setValue(states.initial);
        }
        changeOrder();
    }

    //reverses the order of the issues from "new to old" to "old to new" and vice versa
    function changeOrder() {
        setIssues(issues.reverse().slice(0));
    }

    let [value, setValue] = useState<string>("&#8595;");
    
    //returns the toggle button
    return (
        <div onClick={() => toggleArrow(value)} id="toggle">
            Date {decodeEntity(value)}
        </div>
    );
}
