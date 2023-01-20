//Filter for filtering on champions range
import { Slider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect } from "react";

export interface IRangeFilter {
    change: boolean | undefined;
    setChange: (change: boolean) => void;
    value: number[];
    setValue: (value: number[]) => void;
}

//inspired by https://mui.com/material-ui/react-slider/
//Component for filtering champions on attack range
export function RangeFilter({
    change,
    setChange,
    value,
    setValue,
}: IRangeFilter) {
    //Sets a state that runs a useEffect in HomePage that updates all filters when a filter is changed
    useEffect(() => {
        setChange(!change);
    }, [value]);

    //Updates values on slider and the values displayed in the text under the slider
    const HandleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
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
                value={value}
                onChange={HandleChange}
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
                {value[0]} - {value[1]}
            </Typography>
        </Box>
    );
}
