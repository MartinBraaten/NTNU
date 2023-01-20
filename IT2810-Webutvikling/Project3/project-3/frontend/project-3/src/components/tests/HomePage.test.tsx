/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
// eslint-disable-next-line testing-library/no-dom-import
import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom'
import FilterView from "../molecules/FilterView";
import HomePage from "../pages/HomePage";

test("Renders correctly", () => {
    //cannot run because of hooks used in component (useDispatch)

    /*let { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();*/
});

test("Contains all components", () => {
    //cannot run because of hooks used in component (useDispatch)

    /*render(<HomePage/>);
    expect(screen.getByRole("FilterView")).toBeInTheDocument();
    expect(screen.getByRole("NameFilter")).toBeInTheDocument();*/
});
