import "../components-style/commitDisplay.css";

interface ICommit {
    name: string;
    date: string;
    commitMessage: string;
}

//Component for displaying individual commit information
export default function CommitDisplay({ name, date, commitMessage }: ICommit) {
    return (
        <div id="commitBox">
            <h1>{name}</h1>
            <p>
                <span id="bold">Date:</span> {date} <br />
                <span id="bold">Commit message:</span> <br />
                {commitMessage}
            </p>
        </div>
    );
}
