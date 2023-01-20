//Combine all the champion filters into one component

import { Box } from "@mui/system";
import ChampionSort from "../atoms/ChampionSort";
import { IRangeFilter, RangeFilter } from "../atoms/RangeFilter";
import ResourceTypeFilter, {
    IResourceFilter,
} from "../atoms/ResourceTypeFilter";
import TagFilter, { ITagFilter } from "../atoms/TagFilter";

interface IProps extends IRangeFilter, ITagFilter, IResourceFilter {}

//Component for arranging multiple filter components together
export default function FilterView({
    change,
    setChange,
    value,
    setValue,
}: IProps) {
    return (
        <Box
            sx={{
                width: "300px",
                height: "500px",
                backgroundColor: "black",
                opacity: 0.7,
                display: "flex",
                flexDirection: "column",
                rowGap: "40px",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
            }}
            role="FilterView"
        >
            <ChampionSort change={change} setChange={setChange}></ChampionSort>
            <RangeFilter
                change={change}
                setChange={setChange}
                value={value}
                setValue={setValue}
            ></RangeFilter>
            <TagFilter change={change} setChange={setChange}></TagFilter>
            <ResourceTypeFilter
                change={change}
                setChange={setChange}
            ></ResourceTypeFilter>
        </Box>
    );
}
