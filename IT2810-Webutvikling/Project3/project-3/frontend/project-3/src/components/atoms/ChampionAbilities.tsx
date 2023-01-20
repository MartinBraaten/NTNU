//Display a champions abilities and passive in tabs with its description
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { fieldTheme } from "../themes/themes";
import { Spell } from "../../App";

//Inspired by https://mui.com/material-ui/react-tabs/

interface IChampionAbilities {
    passive: string[]; //eks: ["name of ability", "ability description", "ability image"]
    q: Spell;
    w: Spell;
    e: Spell;
    r: Spell;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

//Panels that are shown for each tab
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <ThemeProvider theme={fieldTheme}>
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3, maxWidth: "50vw" }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        </ThemeProvider>
    );
}

//Component that displays a champions 4 abilities and passive in tabs
export default function ChampionAbilities({
    passive,
    q,
    w,
    e,
    r,
}: IChampionAbilities) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container sx={{ margin: "20px 40px" }}>
            <ThemeProvider theme={fieldTheme}>
                <h1 style={{ color: "white", fontSize: "60px" }}>Abilities</h1>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="icon position tabs example"
                    selectionFollowsFocus
                    id="abilityTabs"
                >
                    <Tab
                        sx={{ color: "white" }}
                        id="passiveTab"
                        icon={
                            <img
                                src={
                                    "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/passive/" +
                                    passive[2]
                                }
                                alt="passive"
                            />
                        }
                        label="Passive"
                    ></Tab>
                    <Tab
                        sx={{ color: "white" }}
                        id="qTab"
                        icon={
                            <img
                                src={
                                    "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/spell/" +
                                    q.image
                                }
                                alt="q"
                            />
                        }
                        label="Q"
                    />
                    <Tab
                        sx={{ color: "white" }}
                        id="wTab"
                        icon={
                            <img
                                src={
                                    "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/spell/" +
                                    w.image
                                }
                                alt="w"
                            />
                        }
                        label="W"
                    />
                    <Tab
                        sx={{ color: "white" }}
                        id="eTab"
                        icon={
                            <img
                                src={
                                    "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/spell/" +
                                    e.image
                                }
                                alt="e"
                            />
                        }
                        label="E"
                    />
                    <Tab
                        sx={{ color: "white" }}
                        id="rTab"
                        icon={
                            <img
                                src={
                                    "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/spell/" +
                                    r.image
                                }
                                alt="r"
                            />
                        }
                        label="R"
                    />
                </Tabs>
            </ThemeProvider>
            <TabPanel value={value} index={0}>
                <h2 style={{ color: "#cfb53b" }}>{passive[0]}</h2>
                <p>{passive[1]}</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h2 style={{ color: "#cfb53b" }}>{q.name}</h2>
                <p>{q.description}</p>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <h2 style={{ color: "#cfb53b" }}>{w.name}</h2>
                <p>{w.description}</p>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <h2 style={{ color: "#cfb53b" }}>{e.name}</h2>
                <p>{e.description}</p>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <h2 style={{ color: "#cfb53b" }}>{r.name}</h2>
                <p>{r.description}</p>
            </TabPanel>
        </Container>
    );
}
