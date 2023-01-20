//Component that shows champion rating (and lets you rate a champion on click)
import { Box, Rating, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useMutation } from "@apollo/client";
import { championByName, CHAMPIONMUTATION } from "../graphql/API";
import { IChampionRating } from "../types/Championtype";

//inspired by https://mui.com/material-ui/react-rating/


//The different ratings a champion can have in LoL terms
const tiers: { [index: string]: string } = {
    1: "D-tier",
    2: "C-tier",
    3: "B-tier",
    4: "A-tier",
    5: "S-tier",
};


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

    // https://www.apollographql.com/docs/react/data/mutations/#example
    const [giveRating] = useMutation(CHAMPIONMUTATION, {
        refetchQueries: [{ query: championByName, variables: { name: name } },],
    });

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
                    onChange={(event, newValue) => {
                        // If the user chooses the same rating as before, newValue == null
                        // It is therefore changed to the value in sessionStorage
                        // If sessionStorage is empty, the value is null and doesn't affect anything
                        if (newValue == null) newValue = Number(sessionStorage.getItem(name));
                        const sessionRating = Number(sessionStorage.getItem(name));
                        if (sessionStorage.getItem(name) != name) {
                            setValue(newValue); // Displays the rating given by the user in the rating component (stars)
                            // setRating displays the new average rating
                            setRating(getNewAverageRating(newValue ?? getAverageRating()));
                            console.log("old rating: " + sessionStorage.getItem(name), "new rating: " + newValue);
                            // Update sessionStorage to the new value
                            sessionStorage.setItem(name, newValue?.toString() ?? "null");
                            // giveRating mutates the database, adding a rating to the champion
                            giveRating({
                                variables: {
                                    name: name,
                                    rateChampionInput: { review: [sessionRating, newValue] },
                                },
                            });
                        } else {
                            if (newValue != null) {
                                sessionStorage.setItem(name, newValue?.toString());
                            }
                            giveRating({
                                variables: {
                                    name: name,
                                    rateChampionInput: { review: [sessionRating, newValue] },
                                },
                            });
                        }

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

