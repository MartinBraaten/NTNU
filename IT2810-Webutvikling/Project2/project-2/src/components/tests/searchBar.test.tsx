import { render } from "@testing-library/react";
import SearchBar from "../atoms/searchBar";

//tests that the search bar value is emplty before anything is written, and similar to what was written after something was written
test("Searchbar has the expected values before and after search", () => {
    function mockFunction() {}
    const { container } = render(
        <SearchBar
            buttonText="Search"
            id="id"
            placeholderText="Do a test"
            handleClick={mockFunction}
        />
    );
    expect((container.querySelector("#id") as HTMLInputElement).value).toMatch(
        ""
    );

    (container.querySelector("#id") as HTMLInputElement).value = "test";
    expect((container.querySelector("#id") as HTMLInputElement).value).toMatch(
        "test"
    );
});
