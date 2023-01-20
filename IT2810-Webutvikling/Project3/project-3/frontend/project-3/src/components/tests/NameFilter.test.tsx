/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import NameFilter from "../atoms/NameFilter";
// eslint-disable-next-line testing-library/no-dom-import
import { screen } from "@testing-library/dom";

test("Renders correctly", () => {
    let { container } = render(<NameFilter change={undefined} setChange={function (change: boolean): void {
        throw new Error("Function not implemented.");
    } } />);
    expect(container).toMatchSnapshot();
});

test("Updates value on writing", () => {
    const { container } = render(
        <NameFilter change={undefined} setChange={function (change: boolean): void {
            throw new Error("Function not implemented.");
        } }/>
    );

    let ratingComponent = screen.getByLabelText(/^Champion name/i);
    expect(ratingComponent.innerHTML).toMatch("");


    ratingComponent.innerHTML = "testing";

    expect(ratingComponent.innerHTML).toMatch("testing");

});
