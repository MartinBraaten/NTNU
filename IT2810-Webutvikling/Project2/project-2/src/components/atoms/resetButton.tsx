import "../components-style/resetButton.css";

interface IResetButton {
    handleClick: () => void;
}

//Component for a button that resets the state of the filters that are active on members/commits/issues
export default function ResetButton({ handleClick }: IResetButton) {
    return (
        <button type="button" onClick={handleClick} id="button">
            Reset
        </button>
    );
}
