import React from "react";
/*components*/

import {Button} from "../../../components/button/Button";

import "../home-styles/hero.css";

const Hero = () => {
  return(
    <section className="section-hero">
      <div className="hero-container">
        <span>Desarrollo de proyectos digitales a tu medida</span>
        <p>Marketing online, Desarrollo web y más...</p>
        <Button title="Ver ofertas"/>
      </div>
    </section>
  )
};
export { Hero };
