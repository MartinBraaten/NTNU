//Component that shows champion rating (and lets you rate a champion on click)

import { Box, Rating, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { gql, useMutation } from "@apollo/client";

//inspired by https://mui.com/material-ui/react-rating/
interface IChampionRating {
    name: string;
    review: number[];
}

//The different ratings a champion can have in LoL terms
const tiers: { [index: string]: string } = {
    1: "D-tier",
    2: "C-tier",
    3: "B-tier",
    4: "A-tier",
    5: "S-tier",
};

//posts a new rating to the database
const CHAMPIONMUTATION = gql`
    mutation Mutation($name: String!, $rateChampionInput: RateChampionInput) {
        addRating(name: $name, RateChampionInput: $rateChampionInput)
    }
`;

//Component for rating a champion
export default function ChampionRating({ review, name }: IChampionRating) {
    //Calculate the average off all the champions ratings stored in the database
    function getAverageRating() {
        let sum = 0;
        for (let i = 0; i < review.length; i++) {
            sum += review[i];
        }
        const average = sum / review.length;
        const roundedAverage =
            Math.round((average + Number.EPSILON) * 100) / 100;
        return roundedAverage;
    }

    //Add the new rating to the average
    function getNewAverageRating(newValuw: number) {
        let sum = 0;
        for (let i = 0; i < review.length; i++) {
            sum += review[i];
        }
        sum += newValuw;
        const average = sum / (review.length + 1);
        const roundedAverage =
            Math.round((average + Number.EPSILON) * 100) / 100;
        return roundedAverage;
    }

    const [averageRating, setRating] = useState<number>(getAverageRating());
    const [value, setValue] = useState<number | null>(getAverageRating());
    const [hover, setHover] = useState(-1);
    const [disabled, setDisabled] = useState<boolean>(false);

    // https://www.apollographql.com/docs/react/data/mutations/#example
    const [giveRating, { data, loading, error }] = useMutation(CHAMPIONMUTATION);

    //Disable the component when a rating is done for a champion
    const session = sessionStorage.getItem(name);
    useEffect(() => {
        if (session != null) {
            setDisabled(true);
        }
    }, [session]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#fff",
                }}
            >
                <Rating
                    role="ratingComponent"
                    sx={{
                        color: "#cfb53b",
                    }}
                    value={value}
                    precision={1}
                    disabled={disabled}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        setDisabled(true);
                        if (newValue != null) {
                            setRating(getNewAverageRating(newValue)); // update average rating
                        }
                        sessionStorage.setItem(name, "done");
                        // giveRating mutates the database, adding a rating to the champion
                        giveRating({
                            variables: {
                                name: name,
                                rateChampionInput: { review: newValue },
                            },
                        });
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={
                        <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                        />
                    }
                    defaultValue={getAverageRating()}
                />
                <Typography
                    role="ratingText"
                    color="#fff"
                    align="left"
                    variant="h6"
                >
                    ({averageRating})
                </Typography>
            </Box>
            {value !== null && (
                <Box
                    sx={{
                        width: "120px",
                        color: "#fff",
                        fontSize: "18px",
                        textAlign: "center",
                    }}
                >
                    {tiers[hover !== -1 ? hover : value]}
                </Box>
            )}
        </Box>
    );
}
