import { createSlice } from "@reduxjs/toolkit"
import { WritableDraft } from "immer/dist/internal"
import { useSelector } from "react-redux"
import { championInfo } from "../../App"
import { selectChampions } from "./ChampionReducer"
import { RootState, store } from "./Store"

interface IActionName {
    type: string
    payload: string
  }

  interface IActionRemove {
    type: string
    payload: championInfo[]
  }

  interface IActionRange {
    type: string
    payload: number[]
  }
  
  // Define a type for the slice state
  interface IFilteredChampionsSlice {
    value: championInfo[]
  }
  
  // Define the initial state using that type
  const initialState: IFilteredChampionsSlice = {
    value: [],
    
  }
  
  
  export const filteredChampionsSlice = createSlice({
      name: 'filteredChampions',
      initialState,
      reducers: {
        removeFilter(state, action: IActionRemove ){
          state.value = action.payload
        },
        nameFilter(state, action:IActionName){
            const filteredChampions = state.value.filter((champions) => {
                if (champions.name != null && champions.name.toLowerCase().includes(action.payload.toLowerCase().trim())) {
                  return champions;
                }
            });
            state.value = filteredChampions;
        
        },
        rangeFilter(state, action: IActionRange){
            const filteredChampions = state.value.filter((champions) => {
                // filter champions on attackrange between the two values from the sliders
                if (champions.attackRange >= action.payload[0] && champions.attackRange <= action.payload[1]) {
                    return champions;
                }
            });
            state.value = filteredChampions;
        },
        tagsFilter(state, action : IActionName){
          const filteredChampions = state.value.filter((champions) => {
            for (var tag in champions.tags){
              if (champions.tags[tag].includes(action.payload.trim())) {
                return champions;
              }
            }
          });
          state.value = filteredChampions;
        },
        resourceFilter(state, action: IActionName){
          const filteredChampions = state.value.filter((champions) => {
            if(champions.partype != null && champions.partype.includes(action.payload.trim())){
              return champions;
            }
          });
          state.value = filteredChampions;
        },
      }
      })
      
      export const { removeFilter, nameFilter, rangeFilter, tagsFilter, resourceFilter } = filteredChampionsSlice.actions
  
      // Other code such as selectors can use the imported `RootState` type
      export const selectFilteredChampions = (state: RootState) => state.filteredChampions.value
      
      export default filteredChampionsSlice.reducer