import "../components-style/textField.css";

interface IField {
    id: string;
}

//Component for text input for personal access token
export default function KeyField({ id }: IField) {
    return (
        <input
            id={id}
            type="text"
            className="input"
            placeholder="Personal access token"
        />
    );
}
