//Display information related to one champion
import { Grid } from "@mui/material";
import ChampionAbilities from "../atoms/ChampionAbilities";
import ChampionInfo from "../molecules/ChampionInfo";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { championByName } from "../graphql/API";


// Retrieved from https://stackoverflow.com/questions/58598637/why-react-new-page-render-from-the-bottom-of-the-screen
const ScrollToTop = () => {
    const pathname = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);
    return null;
}

export type Spell = {
    name: string;
    description: string;
    image: string;
};

const ChampionPage = () => {
    let nameOfChampion = sessionStorage.getItem("clickedChampion");

    const { loading, error, data } = useQuery(championByName, { variables: { name: nameOfChampion } });
    if (loading) return <> Loading</>;
    if (error) return <>{JSON.stringify(error)}</>;

    const champion = data.getChampion;

    let spellsArray: Spell[] = [];
    champion.spells.map(
        (spell: {
            name: string;
            description: string;
            image: {
                full: string;
            };
        }) => {
            let spellArray: Spell = {
                name: spell.name,
                description: spell.description,
                image: spell.image.full,
            };
            return spellsArray.push(spellArray);
        }
    );

    const qSpell = spellsArray[0];
    const wSpell = spellsArray[1];
    const eSpell = spellsArray[2];
    const rSpell = spellsArray[3];
    return (
        <>
            <ScrollToTop />
            <div id="championPage">
                <Grid container spacing={2}>
                    <Grid>
                        <ChampionInfo
                            name={champion.name}
                            title={champion.title}
                            attackRange={champion.attackRange}
                            review={champion.review}
                            lore={champion.lore}
                            tags={champion.tags}
                            loadingScreenImage={
                                "http://ddragon.leagueoflegends.com/cdn/img/champion/centered/" +
                                champion.image.loading
                            }
                            play={champion.allytips}
                            playAgainst={champion.enemytips}
                        ></ChampionInfo>
                    </Grid>
                    <Grid>
                        <ChampionAbilities
                            passive={[
                                champion.passive.name,
                                champion.passive.description,
                                champion.passive.image.full,
                            ]}
                            q={qSpell}
                            w={wSpell}
                            e={eSpell}
                            r={rSpell}
                        ></ChampionAbilities>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};



export default ChampionPage;
