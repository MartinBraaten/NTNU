import { createSlice } from '@reduxjs/toolkit';
import { championInfo } from "../../App";
import { RootState } from './Store';

interface IAction {
  type: string
  payload: championInfo[]
}

interface IActionSort {
  type: string
  payload: string | null
}

// Define a type for the slice state
interface IChampionsSlice {
  value: championInfo[]
}

// Define the initial state using that type
const initialState: IChampionsSlice = {
  value: []
}


export const championsSlice = createSlice({
    name: 'champions',
    initialState,
    reducers: {
      addChampions(state, action: IAction){
        state.value = (action.payload)
      },
      sortChampions(state, action:IActionSort){
        let SortedChampions = state.value
        if (action.payload === "Alphabetical"){
           SortedChampions = state.value.sort(function(a,b) {
            return a.name.localeCompare(b.name , "en")
            
          })
        }
        if (action.payload === "Attack range"){
           SortedChampions = state.value.sort(function(a,b) {
            return (a.attackRange.toString()).localeCompare((b.attackRange.toString()))
          })
        }
        state.value = SortedChampions
      }
    },
    
	})
	
	export const { addChampions, sortChampions } = championsSlice.actions

	// Other code such as selectors can use the imported `RootState` type
	export const selectChampions = (state: RootState) => state.champions.value
	
	export default championsSlice.reducer