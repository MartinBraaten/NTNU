/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
// eslint-disable-next-line testing-library/no-dom-import
import { screen } from "@testing-library/dom";
import ResourceTypeFilter from "../atoms/ResourceTypeFilter";

test("Renders correctly", () => {
    function mockFunction(prop: boolean) { }
    let { container } = render(<ResourceTypeFilter change={undefined} setChange={mockFunction} />);
    expect(container).toMatchSnapshot();
});

test("Updates value on writing", () => {
    function mockFunction(prop: boolean) { }
    const { container } = render(
        <ResourceTypeFilter change={undefined} setChange={mockFunction} />
    );

    let typeComponent = screen.getByRole(/^ChampionResource/i);
    expect(typeComponent.innerHTML).toMatch("");


    typeComponent.innerHTML = "Mana";

    expect(typeComponent.innerHTML).toMatch("Mana");

});
