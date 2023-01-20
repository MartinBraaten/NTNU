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
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, setFilter } from "../store/FiltersReducer";

//Component for searching for specific champions by name
export default function NameFilter() {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

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

                    value={filters.name}
                    onChange={(event: any) => {
                        dispatch(setFilter({ field: "name", value: event.target.value }));
                    }}

                    sx={{ width: "50vw" }}
                    InputProps={{
                        /* style: {backgroundColor:"white" ,}, */
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
