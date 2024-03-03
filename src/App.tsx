import React /*, { useState, useEffect } */ from "react";
//"homepage": "homepage",
//"deploy": "gh-pages -d build",
import "./App.css";
import NavbarFunction from "./Navbar";
import { SubjectChoose } from "./Components/SubjectChoose";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h5>
                    <NavbarFunction></NavbarFunction>
                </h5>
            </header>
            <SubjectChoose></SubjectChoose>
        </div>
    );
}

export default App;
