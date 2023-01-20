//Filter for filtering o champion tags
import {
    Autocomplete,
    TextField,
    ThemeProvider,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { fieldTheme } from "../themes/themes";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, setFilter } from "../store/FiltersReducer";


//inspired by https://mui.com/material-ui/react-autocomplete/
//The options for champion resource type
const resourceTypes = [
    "Blood Well",
    "Mana",
    "Energy",
    "None",
    "Rage",
    "Courage",
    "Shield",
    "Fury",
    "Ferocity",
    "Heat",
    "Grit",
    "Crimson Rush",
    "Flow",
    "Health Cost",
];


//Component for filtering champions on their resource type
export default function ResourceTypeFilter() {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

    return (
        <Box sx={{ width: "200px" }} role="ResourceTypeFilter">
            <Typography
                align="center"
                variant="h6"
                sx={{ fontSize: "18px", fontWeight: "400" }}
            >
                Resource type:
            </Typography>
            <ThemeProvider theme={fieldTheme}>
                <Autocomplete
                    value={filters.resource}
                    disablePortal
                    id="resourceField"
                    options={resourceTypes}
                    onChange={(event: any, resource: string | null) => {
                        dispatch(setFilter({ field: "resource", value: resource }));
                    }}
                    sx={{ width: "200px", color: "#fff" }}
                    renderInput={(params) => (
                        <TextField
                            role="ChampionResource"
                            {...params}
                            label="Resource type"
                        />
                    )}
                />
            </ThemeProvider>
        </Box>
    );
}
