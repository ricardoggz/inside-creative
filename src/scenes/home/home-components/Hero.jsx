import React from "react";
import "../home-styles/hero.css";
import logohome from "../../../img/imgHome/logo.jpg";

const Hero = () => {
  return(
    <section className="section-hero">
      <div className="flex-container hero-container">
        <img src={logohome} alt="loading"/>
        <span className="typed">Un giro a tu negocio como nunca</span>
      </div>
    </section>
  )
};
export { Hero };
