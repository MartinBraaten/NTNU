//Combine all the champion filters into one component

import { Box } from "@mui/system";
import ChampionSort from "../atoms/ChampionSort";
import { RangeFilter } from "../atoms/RangeFilter";
import ResourceTypeFilter from "../atoms/ResourceTypeFilter";
import TagFilter from "../atoms/TagFilter";

//Component for arranging multiple filter components together
export default function FilterView() {
    return (
        <Box
            sx={{
                width: "300px",
                height: "500px",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                rowGap: "40px",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
            }}
            role="FilterView"
        >
            <ChampionSort />
            <RangeFilter />
            <TagFilter />
            <ResourceTypeFilter />
        </Box>
    );
}
