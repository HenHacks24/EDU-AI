import React /*, { useState, useEffect } */ from "react";
//"homepage": "homepage",
//"deploy": "gh-pages -d build",
import "./App.css";
import NavbarFunction from "./Navbar";
//import { Navbar } from "./Navbar";

function App(): JSX.Element {
    return (
        <div className="App">
            <NavbarFunction></NavbarFunction>
            <header className="App-header">HenHacks24 Project</header>
            <h5>Hi Users</h5>
        </div>
    );
}

export default App;
