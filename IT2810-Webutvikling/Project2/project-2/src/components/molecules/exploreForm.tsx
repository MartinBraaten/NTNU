import "../components-style/frontPage.css";
import RepoField from "../atoms/repoField";
import KeyField from "../atoms/keyField";
import ExploreButton from "../atoms/exploreButton";
import { ExploreRepo } from "../pages/frontPage";
import { useNavigate } from "react-router-dom";

//Component of a form for searching for a repository
export default function ExploreForm() {
    let navigate = useNavigate();
    return (
        <div id="container">
            <RepoField id="repoField"></RepoField>
            <KeyField id="keyField"></KeyField>
            <ExploreButton
                handleClick={() => {
                    ExploreRepo();
                    navigate("/homepage");
                    window.location.reload();
                }}
            ></ExploreButton>
        </div>
    );
}
