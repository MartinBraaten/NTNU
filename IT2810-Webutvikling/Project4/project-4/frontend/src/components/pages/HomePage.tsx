//Display all champions and filters
import "../../index.css";
import "./HomePage.css";
import lol from "../media/summonersRift.jpg";
import NameFilter from "../atoms/NameFilter";
import { Box, Container, Grid } from "@mui/material";
import FilterView from "../molecules/FilterView";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { champions } from "../graphql/API";
import { selectFilters } from "../store/FiltersReducer";
import { useState } from "react";
import { championInfo } from "../types/Championtype";
import ChampionView from "../atoms/ChampionView";

//Component for home page, displays all filter and champions
export default function HomePage() {
    const filters = useSelector(selectFilters);
    const limit = 24;
    const [page, setPage] = useState(0);
    const [oldFilter, setOldFilter] = useState(filters)

    if (oldFilter != filters) {
        setOldFilter(filters);
        setPage(0);
    }

    const { loading, error, data } = useQuery(champions, {
        variables: {
            ...filters,
            page: page * limit,
            limit: limit
        }
    });

    if (error) {
        console.log(error)
    }

    const championList = data === undefined ? [] : data?.getFilteredChampions?.map(
        (champion: {
            name: string;
            tags: string[];
            partype: string;
            image: {
                loading: string;
            };
            stats: {
                attackrange: number;
            };
        }) => {
            let singleChampion: championInfo = {
                name: champion.name,
                tags: champion.tags,
                partype: champion.partype,
                championImage: champion.image.loading,
                attackRange: champion.stats.attackrange,
            };
            return singleChampion;
        }
    );

    const displayedChampions = championList.map((champion: championInfo) => {
        if (champion.name != null) {
            return <ChampionView champion={champion} />
        }
    })

    return (
        <Box id="homePage" sx={{ overflow: "hidden" }}>
            <img id="backgroundImage" src={lol} alt="league of legends" />
            <Box id="header" sx={{ top: 0, left: 0, right: 0, pt: "20px", pl: "300px", position: "relative" }}  >
                <NameFilter />
            </Box>

            <Grid
                container
                columnSpacing="10px"
                gridTemplateColumns="300px 1fr"
                sx={{ overflow: "hidden" }}
            >
                <Grid item width={"300px"} sx={{ pt: "50px", position: "fixed" }} >
                    <FilterView />
                </Grid>
                <Grid item width={"300px"} >
                </Grid>
                <Grid id="championsGrid" item sx={{ pt: "50px" }}>
                    <Container
                        sx={{
                            display: "flex",
                            flexDiection: "row",
                            flexWrap: "wrap",
                            gap: "20px",
                            justifyContent: "center",
                            width: "calc(100vw - 330px)",
                            height: "73vh",
                            overflow: "auto",
                        }}
                        id="championsContainer"
                    >
                        {displayedChampions}
                    </Container>
                    <Grid className="pageGrid">
                        <button id="prevButton" className="pageButton" disabled={!page} onClick={() => setPage((prev) => prev - 1)}>&lt; Prev</button>
                        <span className="pageText">Page {page + 1}</span>
                        <button id="nextButton" className="pageButton" disabled={championList.length < 24} onClick={() => setPage((prev) => prev + 1)}>Next &gt;</button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
