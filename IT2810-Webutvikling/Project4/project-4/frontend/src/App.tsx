import HomePage from "./components/pages/HomePage";
import ChampionPage from "./components/pages/ChampionPage";
import { Routes, Route, HashRouter } from "react-router-dom";


function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/:championName" element={<ChampionPage />}></Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
