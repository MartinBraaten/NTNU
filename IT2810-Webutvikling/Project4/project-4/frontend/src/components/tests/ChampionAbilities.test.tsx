/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { fireEvent, render } from "@testing-library/react";
import ChampionRating from "../atoms/ChampionRating";
// eslint-disable-next-line testing-library/no-dom-import
import { screen } from "@testing-library/dom";
import TestRenderer, { act } from "react-test-renderer";
import { Rating, Tab } from "@mui/material";
import ChampionAbilities from "../atoms/ChampionAbilities";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

test("Renders correctly", () => {
    let { container } = render(<ChampionAbilities passive={[]} q={{
        name: "",
        description: "",
        image: ""
    }} w={{
        name: "",
        description: "",
        image: ""
    }} e={{
        name: "",
        description: "",
        image: ""
    }} r={{
        name: "",
        description: "",
        image: ""
    }} />);
    expect(container).toMatchSnapshot();
});


test("Change tab on arrow keys", () => {
    let { container } = render(<ChampionAbilities passive={[]} q={{
        name: "",
        description: "",
        image: ""
    }} w={{
        name: "",
        description: "",
        image: ""
    }} e={{
        name: "",
        description: "",
        image: ""
    }} r={{
        name: "",
        description: "",
        image: ""
    }} />);
    const [p, q, w, e, r] = screen.getAllByRole('tab')

    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(p).toHaveFocus();

    userEvent.keyboard('{ArrowRight}');

    expect(q).toHaveFocus();
    userEvent.keyboard('{ArrowRight}');
    expect(w).toHaveFocus();
    userEvent.keyboard('{ArrowRight}');
    expect(e).toHaveFocus();
    userEvent.keyboard('{ArrowRight}');
    expect(r).toHaveFocus();
});
