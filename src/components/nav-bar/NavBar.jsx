import React from "react";
import { Link } from "react-router-dom";

//components
import { IoFilter } from "react-icons/io5";
import {RoutesApp } from "../../routes/Routes";

import logo from "../../img/imgNavBar/logo.png";
import "./nav-bar.css";

function NavBar() {
  return (
    <header>
      <div className="nav-container flex-container">
        <img src={logo} alt="inside-creative" className="logo" />
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
              <Link to="/about">Conócenos</Link>
            </li>
            <li>
              <Link to="/">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
      <RoutesApp />
    </header>
  );
}

export { NavBar };
