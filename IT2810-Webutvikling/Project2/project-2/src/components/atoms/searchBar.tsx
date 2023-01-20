import "../components-style/searchBar.css";

interface ISearchBar {
    placeholderText: string;
    buttonText: string;
    handleClick: () => void;
    id: string;
}

//Component of a search bar for searching for members and issues
export default function SearchBar({
    placeholderText,
    id,
    handleClick,
}: ISearchBar) {
    return (
        <div id="search">
            <input
                id={id}
                type="text"
                placeholder={placeholderText}
                onChange={handleClick}
            />
        </div>
    );
}
