//Champion image, name, title, tag, attack range, rating and lore
import "../../index.css";
import backArrow from "../media/backArrow.png";
import "./ChampionInfo.css";
import ChampionRating from "../atoms/ChampionRating";
import { useNavigate } from "react-router-dom";
import { IChampionInfo } from "../types/Championtype";


//Component for displaying a champions name, title, rating, image, tags, tips, attack range and lore
export default function ChampionInfo({
    name,
    title,
    review,
    lore,
    tags,
    loadingScreenImage,
    attackRange,
    play,
    playAgainst,
}: IChampionInfo) {
    //If there are two tags for this champion place them in one string, or just return the one tag as a string
    var tagString: string;
    if (tags[1] != null) {
        tagString = tags[0] + ", " + tags[1];
    } else tagString = tags[0];

    let navigate = useNavigate();

    //Make a list of the tips for playing as a champion
    const listPlay = play.map((d) => <li key={d}>{d}</li>);
    //Make a list of the tips for playing against a champion
    const listAgainst = playAgainst.map((d) => <li key={d}>{d}</li>);

    return (
        <div id="championInfo">
            <div id="imageAndText">
                <img
                    src={loadingScreenImage}
                    id="championPicture"
                    alt="loading screen"
                />
                <button
                    id="backArrow"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <img src={backArrow} alt="backArrow" />
                </button>
                <div id="textOnImage">
                    <h1 id="championName">{name}</h1>
                    <h3 id="championTitle">{title}</h3>
                    <ChampionRating
                        review={review}
                        name={name}
                    ></ChampionRating>
                </div>
            </div>
            <div id="championInformation">
                <div id="championSpecs">
                    <div id="specsInfo">
                        <h4 id="specsQuery">Tag:</h4>
                        <h4>{tagString}</h4>
                    </div>
                    <div id="specsInfo">
                        <h4 id="specsQuery">Attack range:</h4>
                        <h4>{attackRange}</h4>
                    </div>
                </div>
                <div id="championIntro">
                    <h2 id="championLore">Lore:</h2>
                    <p>{lore}</p>
                </div>
            </div>
            <h1
                style={{
                    color: "white",
                    margin: "20px 60px",
                    fontSize: "60px",
                }}
            >
                Tips
            </h1>
            <div id="playingTips">
                <div>
                    <h2 id="howToPlay">Play as:</h2>
                    <div>{listPlay}</div>
                </div>
                <div>
                    <h2 id="howToPlayAgainst">Play against:</h2>
                    <div>{listAgainst}</div>
                </div>
            </div>
        </div>
    );
}
