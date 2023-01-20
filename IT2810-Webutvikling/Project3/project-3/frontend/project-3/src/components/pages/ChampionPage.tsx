//Display information related to one champion
import { Grid } from "@mui/material";
import ChampionAbilities from "../atoms/ChampionAbilities";
import ChampionInfo from "../molecules/ChampionInfo";
import { useDispatch, useSelector } from "react-redux";
import {
    changeClickedChampion,
    selectClickedChampions,
} from "../store/ClickedChampionReducer";
import { RootState } from "../store/Store";

//A page that displays all the information about a specific champion
const ChampionPage = () => {
    const clickedChampion = useSelector(selectClickedChampions);
    const dispatch = useDispatch();
    let clickedId = sessionStorage.getItem("clickedChampion");
    const champ = useSelector((state: RootState) =>
        state.champions.value.find((champ) => champ.id === clickedId)
    );

    //If check to see if the store has a champion, if not it will get a champion from sessionStorage
    if (clickedChampion.id === "InitialState") {
        if (champ) {
            dispatch(changeClickedChampion(champ));
        }
    }

    //Error handling if the champion you clicked on is not found
    if (!clickedChampion) {
        return (
            <section>
                <h2>Champion not found!</h2>
            </section>
        );
    }
    return (
        <div id="championPage">
            <Grid container spacing={2}>
                <Grid>
                    <ChampionInfo
                        name={clickedChampion.name}
                        title={clickedChampion.title}
                        attackRange={clickedChampion.attackRange}
                        review={clickedChampion.review}
                        lore={clickedChampion.lore}
                        tags={clickedChampion.tags}
                        loadingScreenImage={
                            "http://ddragon.leagueoflegends.com/cdn/img/champion/centered/" +
                            clickedChampion.championImage
                        }
                        play={clickedChampion.allytips}
                        playAgainst={clickedChampion.enemytips}
                    ></ChampionInfo>
                </Grid>
                <Grid>
                    <ChampionAbilities
                        passive={[
                            clickedChampion.passiveName,
                            clickedChampion.passiveDescription,
                            clickedChampion.passiveImage,
                        ]}
                        q={clickedChampion.qSpell}
                        w={clickedChampion.wSpell}
                        e={clickedChampion.eSpell}
                        r={clickedChampion.rSpell}
                    ></ChampionAbilities>
                </Grid>
            </Grid>
        </div>
    );
};

export default ChampionPage;
