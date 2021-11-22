import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

//components
import { IoFilter } from "react-icons/io5";
import { RoutesApp } from "../../routes/Routes";

import logo from "../../img/imgNavBar/logo.png";
import "./nav-bar.css";

function NavBar() {
  return (
    <Router>
      <header>
        <div className="nav-container flex-container">
          <Link to="/">
            <img src={logo} alt="inside-creative" className="logo" />
          </Link>
          <nav>
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className="bar-btn">
              <IoFilter />
            </label>
            <ul className="list-menu">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/services">Servicios</Link>
              </li>
              <li>
                <Link to="/about">Conócenos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <RoutesApp />
    </Router>
  );
}

export { NavBar };
