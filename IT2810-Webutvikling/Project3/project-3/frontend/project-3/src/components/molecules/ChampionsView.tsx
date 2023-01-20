//Window that displays all filtered/unfiltered champions

import { Container } from "@mui/system";
import { championInfo } from "../../App";
import ChampionView from "../atoms/ChampionView";

interface IChampionsView {
    champions: championInfo[];
}

//Component for arranging multiple ChampionView components together
export default function ChampionsView({ champions }: IChampionsView) {
    //Place the champions into ChampionView component
    const displayedChampions = champions.map((champion) => {
        if (champion.name != null) {
            return <ChampionView champion={champion} />;
        }
    });
    return (
        <Container
            sx={{
                display: "flex",
                flexDiection: "row",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
                width: "calc(100vw - 330px)",
            }}
            id="championsContainer"
        >
            {displayedChampions}
        </Container>
    );
}
