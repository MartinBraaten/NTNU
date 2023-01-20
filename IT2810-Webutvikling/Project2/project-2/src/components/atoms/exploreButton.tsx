import "../components-style/exploreButton.css";

interface IExploreButton {
    handleClick: () => void;
}

//Component for a button displayed in the form for searching a repository
export default function ExploreButton({ handleClick }: IExploreButton) {
    return (
        <button type="button" onClick={handleClick} id="exploreButton">
            Explore repository
        </button>
    );
}
