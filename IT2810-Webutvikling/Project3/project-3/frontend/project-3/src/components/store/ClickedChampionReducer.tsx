import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { championInfo, Spell } from "../../App";
import ChampionInfo from '../molecules/ChampionInfo';
import { selectChampions } from './ChampionReducer';
import { RootState } from './Store';

interface IAction {
    type: string
    payload: championInfo
}


// Define a type for the slice state
interface IClickedChampionsSlice {
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
}

// Define the initial state using that type
const initialState: IClickedChampionsSlice = {
    
        id: "InitialState",
        name: "Zac",
        title: "string",
        lore: "string",
        tags: [""],
        allytips: [""],
        enemytips: [""],
        partype: "string",
        review: [2],
        championImage: "string",
        attackRange: 2,
        passiveName: "string",
        passiveDescription: "string",
        passiveImage: "string",
        qSpell: {
            name: "string",
            description: "string",
            image: "string",
        },
        wSpell: {
            name: "string",
            description: "string",
            image: "string",
        },
        eSpell: {
            name: "string",
            description: "string",
            image: "string",
        },
        rSpell: {
            name: "string",
            description: "string",
            image: "string",
        }
    
}


export const clickedChampionSlice = createSlice({
    name: 'clickedChampion',
    initialState,
    reducers: {
      changeClickedChampion(state, action: IAction){
        state.id = action.payload.id
        state.name = action.payload.name
        state.title = action.payload.title
        state.lore = action.payload.lore
        state.tags = action.payload.tags
        state.allytips = action.payload.allytips
        state.enemytips = action.payload.enemytips
        state.partype= action.payload.partype
        state.review= action.payload.review
        state.championImage= action.payload.championImage
        state.attackRange= action.payload.attackRange
        state.passiveName= action.payload.passiveName
        state.passiveDescription= action.payload.passiveDescription
        state.passiveImage= action.payload.passiveImage
        state.qSpell= action.payload.qSpell
        state.wSpell= action.payload.wSpell
        state.eSpell= action.payload.eSpell
        state.rSpell= action.payload.rSpell
      },
    }
	})
	
	export const { changeClickedChampion } = clickedChampionSlice.actions

	// Other code such as selectors can use the imported `RootState` type
	export const selectClickedChampions = (state: RootState) => state.clickedChampion
	
	export default clickedChampionSlice.reducer