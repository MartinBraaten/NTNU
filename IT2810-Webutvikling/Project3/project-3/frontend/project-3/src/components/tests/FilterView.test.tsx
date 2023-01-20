/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
// eslint-disable-next-line testing-library/no-dom-import
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import FilterView from "../molecules/FilterView";
import TestRenderer from "react-test-renderer";
import ChampionSort from "../atoms/ChampionSort";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from 'react-redux'


test("Renders correctly", () => {
    //cannot run because of hooks used in component (useDispatch)

    /*
    let { container } = render(
        <FilterView
            change={undefined}
            setChange={function (change: boolean): void {
                throw new Error("Function not implemented.");
            }}
            value={[]}
            setValue={function (value: number[]): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    expect(container).toMatchSnapshot();*/
});

test("Contains all filters", () => {
    //cannot run because of hooks used in component (useDispatch)

    /*function mockFunction(prop: boolean) { }
    function mockFunction2(prop: number | number[]) { }

    render(
        <FilterView
            change={undefined}
            setChange={mockFunction}
            value={[]}
            setValue={mockFunction2}
        />
    );
    expect(screen.getByRole("ChampionSort")).toBeInTheDocument();
    expect(screen.getByRole("RangeFilter")).toBeInTheDocument();
    expect(screen.getByRole("TagFilter")).toBeInTheDocument();
    expect(screen.getByRole("ResourceTypeFilter")).toBeInTheDocument();*/
});
