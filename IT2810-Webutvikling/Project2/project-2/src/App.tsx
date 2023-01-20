import React, { createContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FrontPage from "./components/pages/frontPage";
import HomePage from "./components/pages/homePage";
import { create } from "domain";
import Switch from "./components/atoms/switch";
import { Routes, Route, useNavigate, BrowserRouter, HashRouter } from "react-router-dom";
import PageNotFound from "./components/pages/pageNotFound";

// Props for creating Context
type ThemeProps = {
    [others: string]: any;
};

// Create context
export const ThemeContext = createContext<ThemeProps | null>(null);

function App() {

    const [theme, setTheme] = useState<string>("light");

    // Sets theme saved in localStorage if possible
    useEffect(() => {
        let currentTheme = localStorage.getItem("mode");
        if (currentTheme === null) {
            currentTheme = "light";
        }
        setTheme(currentTheme);
    }, []);

    // Changes theme and saves to localStorage
    const toggleTheme = () => {
        let newTheme = (theme === "light" ? "dark" : "light");

        setTheme(newTheme);

        localStorage.setItem("mode", newTheme);
    };

    return (
        <div id="App">
          
            <HashRouter>
                <Routes>
                    <Route
                        path="/" /* Routes frontpage to index */
                        element={
                            <ThemeContext.Provider
                                value={{ theme, toggleTheme }}
                            >
                                <div className="App" id={theme}>
                                    <FrontPage
                                        handleClick={toggleTheme}
                                        switchState={theme}
                                    />
                                </div>
                            </ThemeContext.Provider>
                        }
                    />
                    <Route
                        path="/homepage"
                        element={
                            <ThemeContext.Provider
                                value={{ theme, toggleTheme }}
                            >
                                <div className="App" id={theme}>
                                    <HomePage
                                        repositoryName={localStorage.getItem(
                                            "name"
                                        )}
                                        handleClick={toggleTheme}
                                        switchState={theme}
                                    ></HomePage>
                                </div>
                            </ThemeContext.Provider>
                        }
                    />
                    <Route path="/page-not-found" element={<PageNotFound />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
