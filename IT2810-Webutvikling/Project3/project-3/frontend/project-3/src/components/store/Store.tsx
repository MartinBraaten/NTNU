import { configureStore } from '@reduxjs/toolkit'
import championReducer from "./ChampionReducer"
import clickedChampionReducer from "./ClickedChampionReducer"
import filteredChampionsReducer from "./FilteredChampionsReducer"

export const store = configureStore({
    reducer: {
        champions: championReducer,
        clickedChampion: clickedChampionReducer,
        filteredChampions: filteredChampionsReducer
    }
  })

  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch