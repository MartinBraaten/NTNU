import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './Store';

interface IAction {
    type: string
    payload: IFiltersSlice
}

interface SetFilterAction {
    type: string;
    payload: {
        field: keyof IFiltersSlice;
        value: string | number | null | number[];
    }
}

// Define a type for the slice state
interface IFiltersSlice {
    name: string | null;
    tag: string | null;
    range: number[];
    resource: string | null;
    sortAlphabetically: string | null;
}

// Define the initial state using that type
const initialState: IFiltersSlice = {
    name: "",
    tag: null,
    range: [0, 650],
    resource: null,
    sortAlphabetically: "Alphabetical",
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters(_, action: IAction) {
            return action.payload;
        },
        setFilter(state, action: SetFilterAction) {
            return { ...state, [action.payload.field]: action.payload.value };
        }
    },
})

export const { setFilters, setFilter } = filtersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFilters = (state: RootState) => state.filters;

export default filtersSlice.reducer