import "../components-style/frontPage.css";
import ExploreForm from "../molecules/exploreForm";
import headerImage from "../media/headerImage.png";
import Switch from "../atoms/switch";

interface IFrontPage {
    handleClick: () => void;
    switchState: string;
}

//put relevant link and key information into sessionStorage
export function ExploreRepo() {
    let repository = (document.getElementById("repoField") as HTMLInputElement)
        .value;
    let key = (document.getElementById("keyField") as HTMLInputElement).value;
    var repoSplitted = repository.split(".no/");
    repoSplitted[1] = repoSplitted[1].replaceAll("/", "%2F");
    repoSplitted[0] = repoSplitted[0] + ".no";

    var parts = repository.split("/");
    if (parts) {
        let repositoyName = parts[parts.length - 1];
        sessionStorage.setItem("name", repositoyName);
    }
    sessionStorage.setItem("link0", repoSplitted[0]);
    sessionStorage.setItem("link1", repoSplitted[1]);
    sessionStorage.setItem("key", key);
}

// Frontpage component
export default function FrontPage({ handleClick, switchState }: IFrontPage) {
    console.log(localStorage.getItem("key"));
    return (
        <div id="frontPage">
            <div id="header">
                <img src={headerImage} alt="GitLab header"></img>
                <h1 id="title">
                    Git<span id="splore">splore</span>
                </h1>
            </div>
            <div id="frontPageToggle">
                <Switch handleClick={handleClick} switchState={switchState}  />
            </div>
            <h3 id="subtitle">Which repository do you wish to explore?</h3>
            <ExploreForm></ExploreForm>
        </div>
    );
}
