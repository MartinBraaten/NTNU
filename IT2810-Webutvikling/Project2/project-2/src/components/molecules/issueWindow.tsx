import "../components-style/issueWindow.css";
import IssueDisplay from "../atoms/issueDisplay";
import IssueFilters from "./issueFilters";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//object type for storing issue information
export type issueInfo = {
    state: string;
    iid: number;
    title: string;
    createdAt: Date;
    closedAt: Date | null;
    description: string;
};

//Component for assembling issue-components, issueDisplays for each issue along with relevant filters
export default function IssueWindow() {
    let navigate = useNavigate();
    const [issues, setIssues] = useState<issueInfo[]>([]);
    const [filteredIssues, setFilteredIssues] = useState<issueInfo[]>([]);

    //Get all (100) issues from project
    useEffect(() => {
        fetch(
            sessionStorage.getItem("link0") +
                "/api/v4/projects/" +
                sessionStorage.getItem("link1") +
                "/issues?per_page=100",
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ` + sessionStorage.getItem("key"),
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                let issueList: issueInfo[] = [];
                data.map(
                    //turn json into issueInfo objects
                    (element: {
                        state: any;
                        iid: any;
                        title: any;
                        created_at: string;
                        closed_at: string;
                        description: any;
                    }) => {
                        let singleIssue: issueInfo = {
                            state: element.state,
                            iid: element.iid,
                            title: element.title,
                            createdAt: new Date(element.created_at),
                            description: element.description,
                            closedAt: null,
                        };
                        //add closedAt property if the issue has been closed
                        if (element.closed_at != null) {
                            singleIssue.closedAt = new Date(element.closed_at);
                        }
                        return issueList.push(singleIssue);
                    }
                );
                //set state of issues to all issues fetched
                setIssues(issueList);
                //set state of the issues displayed to all issues fetched
                setFilteredIssues(issueList);
            })
            .catch((err) => {
                console.log(err.message);
                navigate("/page-not-found");
            });
    }, []);

    //place issue objects that are to be displayed into issueDisplay-components
    const issueDisplays = filteredIssues.map((issue) => {
        let state = "Opened at " + issue.createdAt.toDateString();
        if (issue.closedAt != null) {
            state =
                "Opened at " +
                issue.createdAt.toDateString() +
                ", closed at " +
                issue.closedAt.toDateString();
        }
        return (
            <IssueDisplay
                name={issue.iid + " " + issue.title}
                state={state}
                issueDescription={issue.description}
            />
        );
    });

    //returns filters and all issueDisplays
    return (
        <div id="issueContainer">
            <IssueFilters
                issues={issues}
                setIssues={setIssues}
                setFilteredIssues={setFilteredIssues}           
                ></IssueFilters>
            {issueDisplays}
        </div>
    );
}
