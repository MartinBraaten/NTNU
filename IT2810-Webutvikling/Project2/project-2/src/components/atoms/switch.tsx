import "../components-style/switch.css";

interface ISwitch {
    handleClick: () => void;
    switchState: string;
}

// Creates switch component for toggling theme. 
// Code is retrieved from W3Schools. See documentation for source.
export default function Switch({ handleClick, switchState }: ISwitch) {
    let checkValue
    if (switchState === "light") {
        checkValue = false;
    } else {
        checkValue = true;
    }
    return (
        <div>
            <label id="toggleLabel">Dark mode</label>
            <label className="switch">
                <input
                    id="switchSlider"
                    type="checkbox"
                    onClick={handleClick}
                    checked={checkValue}
                />
                <span className="slider round" id="switchSlider2"></span>
            </label>
        </div>
    );
}
