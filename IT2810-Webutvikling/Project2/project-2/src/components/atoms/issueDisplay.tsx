import "../components-style/issueDisplay.css";

interface IIssue {
    name: string;
    state: string;
    issueDescription: string;
}

//Component for displaying individual issue information
export default function IssueDisplay({
    name,
    state,
    issueDescription,
}: IIssue) {
    return (
        <div id="issueBox">
            <h1>{name}</h1>
            <p>
                <span id="bold">State:</span> {state} <br />
                <span id="bold">Issue description:</span> <br />
                {issueDescription}
            </p>
        </div>
    );
}
