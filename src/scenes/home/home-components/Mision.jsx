import React from "react";
import misionimg from "../../../img/imgHome/mision.png";
import "../home-styles/description.css";

function Mision() {
  return (
    <section className="mision-container">
      <div className="flex-container description-container">
        <div>
          <h1>Nuestra Misión</h1>
          <p>
            Brindar los mejores servicios y la mejor calidad en cada uno de los
            proyectos que realizaremos, creando así la mejor versión de nuestros
            clientes. 👌
          </p>
        </div>
        <figure>
          <img src={misionimg} alt="loading img" />
        </figure>
      </div>
    </section>
  );
}

export { Mision };
