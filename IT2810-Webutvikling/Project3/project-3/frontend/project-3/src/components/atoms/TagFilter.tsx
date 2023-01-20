//Filter for filtering o champion tags
import {
    Autocomplete,
    TextField,
    ThemeProvider,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { fieldTheme } from "../themes/themes";

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

export interface ITagFilter {
    change: boolean | undefined;
    setChange: (change: boolean) => void;
}

//Component for filtering champions on their tag
export default function TagFilter({ change, setChange }: ITagFilter) {
    const [value, setValue] = useState<string | null>(null);

    //Sets a state that runs a useEffect in HomePage that updates all filters when a filter is changed
    useEffect(() => {
        setChange(!change);
    }, [value]);
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
                    value={value}
                    disablePortal
                    id="tagSelect"
                    options={championTags}
                    onChange={(event: any, tag: string | null) => {
                        setValue(tag);
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
