import { useState } from "react";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import ChampionPage from "./components/pages/ChampionPage";
import { gql, useQuery } from "@apollo/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addChampions } from './components/store/ChampionReducer'
import { removeFilter } from "./components/store/FilteredChampionsReducer";


const champions = gql`
    query Query {
        getChampions {
            id
            name
            title
            lore
            tags
            allytips
            enemytips
            partype
            review
            image {
                loading
            }
            stats {
                attackrange
            }
            passive {
                name
                description
                image {
                    full
                }
            }
            spells {
                id
                name
                description
                image {
                    full
                }
            }
        }
    }
`;

export type championInfo = {
    id: string;
    name: string;
    title: string;
    lore: string;
    tags: string[];
    allytips: string[];
    enemytips: string[];
    partype: string;
    review: number[];
    championImage: string;
    attackRange: number;
    passiveName: string;
    passiveDescription: string;
    passiveImage: string;
    qSpell: Spell; //["name", "description", "image"]
    wSpell: Spell; //["name", "description", "image"]
    eSpell: Spell; //["name", "description", "image"]
    rSpell: Spell; //["name", "description", "image"]
};

export type Spell = {
    name: string;
    description: string;
    image: string;
};

interface props {
  addChampions: (champions: championInfo[]) => null
}

function App() {


    const [allChampions, setAllChampions] = useState<championInfo[]>([]);
    const dispatch = useDispatch();
    
    const { loading, error, data } = useQuery(champions);
    if (loading) return <> Loading</>;
    if (error) return <>{JSON.stringify(error)}</>;
    let championList: championInfo[] = [];
    let i: number = 0;
    let j: number = 0;
    data?.getChampions?.map(
        (champion: {
            id: string;
            name: string;
            title: string;
            lore: string;
            tags: string[];
            allytips: string[];
            enemytips: string[];
            partype: string;
            review: number[];
            image: {
                loading: string;
            };
            stats: {
                attackrange: number;
            };
            passive: {
                name: string;
                description: string;
                image: {
                    full: string;
                };
            };
            spells: [
                {
                    id: string;
                    name: string;
                    description: string;
                    image: {
                        full: string;
                    };
                }
            ];
        }) => {
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
            let singleChampion: championInfo = {
                id: champion.id,
                name: champion.name,
                title: champion.title,
                lore: champion.lore,
                tags: champion.tags,
                allytips: champion.allytips,
                enemytips: champion.enemytips,
                partype: champion.partype,
                review: champion.review,
                championImage: champion.image.loading,
                attackRange: champion.stats.attackrange,
                passiveName: champion.passive.name,
                passiveDescription: champion.passive.description,
                passiveImage: champion.passive.image.full,
                qSpell: spellsArray[0],
                wSpell: spellsArray[1],
                eSpell: spellsArray[2],
                rSpell: spellsArray[3],
            };
            return championList.push(singleChampion);
            
        }
    );
    dispatch(addChampions(championList));
    dispatch(removeFilter(championList));
    
    return(
      <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/:championName" element = {<ChampionPage />}></Route>
    </Routes>
    </HashRouter>
    );
    }


export default App;
