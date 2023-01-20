//Filter for filtering o champion tags
import {
    Autocomplete,
    TextField,
    ThemeProvider,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChampions, sortChampions } from "../store/ChampionReducer";
import { removeFilter } from "../store/FilteredChampionsReducer";
import { fieldTheme } from "../themes/themes";
import { IFilter } from "./NameFilter";

//inspired by https://mui.com/material-ui/react-autocomplete/
//The options for ordering champions
const orderTypes = ["Alphabetical", "Attack range"];

//Component that lets you choose which order to display the champions in
export default function ChampionSort({ change, setChange }: IFilter) {
    const [value, setValue] = useState<string | null>(null);
    const dispatch = useDispatch();
    const allChampions = useSelector(selectChampions);

    //Set value og textfield to the chosen alternative
    const handleChange = (event: any, order: string | null) => {
        setValue(order);
    };
    //Order the champions everytime a new order is chosen
    useEffect(() => {
        dispatch(sortChampions(value));
        dispatch(removeFilter(allChampions));
        setChange(!change);
    }, [value]);

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
                    value={value}
                    disablePortal
                    options={orderTypes}
                    id="championsSort"
                    onChange={handleChange}
                    sx={{ width: "200px", color: "#fff" }}
                    renderInput={(params) => (
                        <TextField {...params} label="Sort order" />
                    )}
                />
            </ThemeProvider>
        </Box>
    );
}
