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

export interface IResourceFilter {
    change: boolean | undefined;
    setChange: (change: boolean) => void;
}

//Component for filtering champions on their resource type
export default function ResourceTypeFilter({
    change,
    setChange,
}: IResourceFilter) {
    const [value, setValue] = useState<string | null>(null);
    //Sets a state that runs a useEffect in HomePage that updates all filters when a filter is changed
    useEffect(() => {
        setChange(!change);
    }, [value]);

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
                    value={value}
                    disablePortal
                    id="resourceField"
                    options={resourceTypes}
                    onChange={(event: any, tag: string | null) => {
                        setValue(tag);
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
