//Filter for filtering o champion tags
import {
    Autocomplete,
    TextField,
    ThemeProvider,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { fieldTheme } from "../themes/themes";
import { selectFilters, setFilter } from "../store/FiltersReducer";


//inspired by https://mui.com/material-ui/react-autocomplete/
//The options for ordering champions
const orderTypes = ["Alphabetical", "Attack range"];

//Component that lets you choose which order to display the champions in
export default function ChampionSort() {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

    return (
        <Box sx={{ width: "200px" }} role="ChampionSort">
            <Typography
                align="center"
                variant="h6"
                sx={{ fontSize: "18px", fontWeight: "400" }}
            >
                Sort by:
            </Typography>
            <ThemeProvider theme={fieldTheme}>
                <Autocomplete

                    value={filters.sortAlphabetically}
                    disablePortal
                    options={orderTypes}
                    id="championsSort"
                    onChange={(event: any, sortAlphabetically: string | null) => {
                        dispatch(setFilter({ field: "sortAlphabetically", value: sortAlphabetically }));
                    }}
                    sx={{ width: "200px", color: "#fff" }}
                    renderInput={(params) => (
                        <TextField {...params} label="Sort order" />
                    )}
                />
            </ThemeProvider>
        </Box>
    );
}
