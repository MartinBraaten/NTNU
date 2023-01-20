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
//Options for champion tag
const championTags = [
    "Marksman",
    "Support",
    "Assassin",
    "Mage",
    "Fighter",
    "Tank",
];

//Component for filtering champions on their tag
export default function TagFilter() {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

    return (
        <Box sx={{ width: "200px" }} role="TagFilter">
            <Typography
                align="center"
                variant="h6"
                sx={{ fontSize: "18px", fontWeight: "400" }}
            >
                Tag:
            </Typography>

            <ThemeProvider theme={fieldTheme}>
                <Autocomplete
                    value={filters.tag}
                    disablePortal
                    id="tagSelect"
                    options={championTags}
                    onChange={(event: any, tag: string | null) => {
                        dispatch(setFilter({ field: "tag", value: tag }));
                    }}
                    sx={{ width: "200px", color: "#fff" }}
                    renderInput={(params) => (
                        <TextField role="ChampionTag" {...params} label="Tag" />
                    )}
                />
            </ThemeProvider>
        </Box>
    );
}
