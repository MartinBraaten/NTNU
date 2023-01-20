//Filter for filtering on champion name
import {
    IconButton,
    InputAdornment,
    TextField,
    ThemeProvider,
} from "@mui/material";
import Box from "@mui/material/Box";
import { fieldTheme } from "../themes/themes";
import SearchIcon from "@mui/icons-material/Search";

export interface IFilter {
    change: boolean | undefined;
    setChange: (change: boolean) => void;
}

//Component for searching for specific champions by name
export default function NameFilter({ change, setChange }: IFilter) {
    return (
        <Box
            sx={{
                width: "calc(100vw - 315px)",
                float: "right",
                textAlign: "center",
            }}
            role="NameFilter"
        >
            <ThemeProvider theme={fieldTheme}>
                <TextField
                    id="outlined-basic"
                    label="Champion name"
                    variant="outlined"
                    onChange={() => {
                        setChange(!change);
                    }}
                    sx={{ width: "50vw" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end">
                                    <SearchIcon
                                        sx={{ color: "#CFB53B" }}
                                    ></SearchIcon>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </ThemeProvider>
        </Box>
    );
}
