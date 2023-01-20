//Filter for filtering on champions range
import { Slider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, setFilter } from "../store/FiltersReducer";

//inspired by https://mui.com/material-ui/react-slider/
//Component for filtering champions on attack range
export function RangeFilter() {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

    return (
        <Box sx={{ width: "200px" }} role="RangeFilter">
            <Typography
                align="center"
                variant="h6"
                sx={{ fontSize: "18px", fontWeight: "400" }}
            >
                Attack range:
            </Typography>
            <Slider
                role="rangeSlider"
                sx={{ color: "#cfb53b" }}
                value={filters.range}
                onChange={(event: any, range: number | number[]) => {
                    dispatch(setFilter({ field: "range", value: range }));
                }}
                valueLabelDisplay="auto"
                max={650}
                disableSwap
            />
            <Typography
                role="sliderValues"
                color="#fff"
                align="center"
                variant="h6"
                sx={{ fontSize: "18px", fontWeight: "400" }}
            >
                {filters.range[0]} - {filters.range[1]}
            </Typography>
        </Box>
    );
}
