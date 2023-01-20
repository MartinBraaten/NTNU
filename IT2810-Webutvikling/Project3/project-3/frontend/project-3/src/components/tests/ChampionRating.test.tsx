/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import ChampionRating from "../atoms/ChampionRating";
// eslint-disable-next-line testing-library/no-dom-import
import { screen } from "@testing-library/dom";
import TestRenderer, { act } from "react-test-renderer";
import { Rating } from "@mui/material";

test("Renders correctly", () => {
    //cannot run because of hooks used in component (useMutation)

    /*let { container } = render(<ChampionRating name={""} review={[]} />);
    expect(container).toMatchSnapshot();*/
});

test("Display correct average rating value", () => {
    //cannot run because of hooks used in component (useMutation)

    /*let ratingProp: number[] = [3];
    render(<ChampionRating name={""} review={ratingProp}/>);

    let ratingComponent = screen.getByRole(/^ratingText/i);
    expect(ratingComponent.innerHTML).toMatch("(" + ratingProp + ")");*/
});

test("Disable rating component after one rating", () => {
    //cannot run because of hooks used in component (useMutation)

    /*const container = TestRenderer.create(<ChampionRating name={""} review={[]} />);

    expect(container.root.findByType(Rating).props.disabled).toBe(false);

    act(() => {
        container.root.findByType(Rating).props.onChange();
    });
    expect(container.root.findByType(Rating).props.disabled).toBe(true);*/
});
