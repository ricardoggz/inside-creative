import React from "react";
import logo from "../../img/imgNavBar/logo.jpg";

import "./nav-bar.css";

function NavBar (){
    return(
        <header>
            <div className="nav-container flex-container">
                <img src={logo} alt="inside-creative" className="logo" />
            </div>
        </header>
    )
}

export {NavBar};