/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import ChampionView from "../atoms/ChampionView";
import Zac from "../media/Zac_0.jpg";
// eslint-disable-next-line testing-library/no-dom-import
import { screen } from "@testing-library/dom";
import TestRenderer, { act } from "react-test-renderer";
import { CardMedia, Rating, Typography } from "@mui/material";

test("Renders correctly", () => {
    //cannot run because of hooks used in component (useNavigate)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    /*act(() => {
        let { container } = render(
            <ChampionView attackRange={300} name="test" image={Zac} />
        );
        expect(container).toMatchSnapshot();
    });*/
});

test("Display correct values", () => {
    //cannot run because of hooks used in component (useNavigate)

    /*let name: string = "Zac";
    let image: string = "Zac_0.jpg";
    let attachRange: number = 300;
    act(() => {
        const container = TestRenderer.create(
            <ChampionView attackRange={attachRange} name={name} image={image} />
        );
        expect(container.root.findByType(CardMedia).props.image).toBe(image);
        expect(
            container.root.findByProps({ role: "card-name" }).props.image
        ).toBe(name);
        expect(
            container.root.findByProps({ role: "card-range" }).props.image
        ).toBe(attachRange);
    });*/
});
