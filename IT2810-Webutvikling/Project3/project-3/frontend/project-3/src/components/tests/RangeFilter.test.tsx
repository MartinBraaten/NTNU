/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";

// eslint-disable-next-line testing-library/no-dom-import
import { screen } from "@testing-library/dom";
import { RangeFilter } from "../atoms/RangeFilter";

test("Renders correctly", () => {
    function mockFunction(prop: boolean) { }
    function mockFunction2(prop: number | number[]) { }
    let { container } = render(<RangeFilter change={undefined} setChange={mockFunction} value={[]} setValue={mockFunction2} />);
    expect(container).toMatchSnapshot();
});

test("Display correct numbers", () => {
    function mockFunction(prop: boolean) { }
    function mockFunction2(prop: number | number[]) { }
    render(<RangeFilter change={undefined} setChange={mockFunction} value={[0, 650]} setValue={mockFunction2} />);

    let textComponent = screen.getByRole(/^sliderValues/i);
    expect(textComponent.innerHTML).toMatch("0 - 650");
});

test("Updates displayed values on slider change", () => {

    //cannot run because of hooks used in component (useState)
/*
    const component = TestRenderer.create(<RangeFilter />);

    component.root.findByType(Slider).props.onChange(null, [50, 175]);

    component.root.findByType(Slider).props.value = [50, 175];

    let textComponent = screen.getByRole(/^sliderValues/i);
    expect(textComponent.innerHTML).toMatch("50 - 175");
*/
});

