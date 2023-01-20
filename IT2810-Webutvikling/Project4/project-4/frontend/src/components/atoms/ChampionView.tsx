//image for one champion displayed in ChampionsView
import "../../index.css";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { imageCardTheme } from "../themes/themes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { championInfo } from "../types/Championtype";


//inspired by https://mui.com/material-ui/react-card/
interface IChampionView {
    champion: championInfo;
}

//Component for displaying a single champion with name, attack range and image
export default function ChampionView({ champion }: IChampionView) {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div id="cardActionArea" role="ChampionView">
            <ThemeProvider theme={imageCardTheme}>
                <Card
                    sx={{ maxWidth: "302px" }}
                    onClick={() => {
                        navigate("/" + champion.name);
                        sessionStorage.setItem("clickedChampion", champion.name);
                    }}
                >
                    <CardActionArea>
                        <CardMedia
                            role="card-media"
                            component="img"
                            height="170px"
                            image={
                                "http://ddragon.leagueoflegends.com/cdn/img/champion/centered/" +
                                champion.championImage
                            }
                            alt="league of legends champion"
                        />
                        <CardContent
                            sx={{ color: "#fff", backgroundColor: "#18323c" }}
                        >
                            <Typography
                                role="card-name"
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {champion.name}
                            </Typography>
                            <Typography
                                role="card-range"
                                sx={{ fontWeight: "200" }}
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                Attack range: {champion.attackRange}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ThemeProvider>
        </div>
    );
}
