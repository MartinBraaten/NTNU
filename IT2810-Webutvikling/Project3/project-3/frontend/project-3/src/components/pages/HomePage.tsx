//Display all champions and filters
import "../../index.css";
import lol from "../media/summonersRift.jpg";
import NameFilter from "../atoms/NameFilter";
import ChampionsView from "../molecules/ChampionsView";
import { Box, Grid } from "@mui/material";
import FilterView from "../molecules/FilterView";
import { selectChampions } from "../store/ChampionReducer";
import { useDispatch, useSelector } from "react-redux";
import {
    nameFilter,
    rangeFilter,
    removeFilter,
    resourceFilter,
    selectFilteredChampions,
    tagsFilter,
} from "../store/FilteredChampionsReducer";
import { useEffect, useState } from "react";

//Component for home page, displays all filter and champions
export default function HomePage() {
    const [change, setChange] = useState<boolean>(false);
    const [value, setValue] = useState<number[]>([0, 650]);
    const dispatch = useDispatch();
    const allChampions = useSelector(selectChampions);

    //Runs every time a filter is changed so that multiple filters can work together without cancelling each other out
    useEffect(() => {
        dispatch(removeFilter(allChampions));
        if (
            (document.getElementById("outlined-basic") as HTMLInputElement)
                .value !== ""
        ) {
            dispatch(
                nameFilter(
                    (
                        document.getElementById(
                            "outlined-basic"
                        ) as HTMLInputElement
                    ).value
                )
            );
        }
        dispatch(rangeFilter(value));
        dispatch(
            resourceFilter(
                (document.getElementById("resourceField") as HTMLInputElement)
                    .value
            )
        );
        dispatch(
            tagsFilter(
                (document.getElementById("tagSelect") as HTMLInputElement).value
            )
        );
    }, [change]);
    const championsRedux = useSelector(selectFilteredChampions);
    return (
        <Box id="homePage" sx={{ overflow: "hidden" }}>
            <img id="backgroundImage" src={lol} alt="league of legends" />
            <Box sx={{ pt: "20px", pb: "20px" }}>
                <NameFilter change={change} setChange={setChange}></NameFilter>
            </Box>
            <Grid
                container
                columnSpacing="10px"
                gridTemplateColumns="300px 1fr"
            >
                <Grid item width={"300px"}>
                    <FilterView
                        change={change}
                        setChange={setChange}
                        value={value}
                        setValue={setValue}
                    ></FilterView>
                </Grid>
                <Grid item sx={{ pt: "30px" }}>
                    <ChampionsView champions={championsRedux}></ChampionsView>
                </Grid>
            </Grid>
        </Box>
    );
}
