import "../components-style/textField.css";

interface IField {
    id: string;
}

//Component for text input for GitLab link
export default function RepoField({ id }: IField) {
    return (
        <input
            id={id}
            type="text"
            className="input"
            placeholder="GitLab link"
        />
    );
}
