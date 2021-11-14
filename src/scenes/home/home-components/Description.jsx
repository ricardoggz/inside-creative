import React from "react";
import illustration from "../../../img/imgHome/illustration.png";
import "../home-styles/description.css";

/*components*/

import { Button } from "../../../components/button/Button";

function Description() {
  return (
    <section className="flex-container description-container">
      <div>
        <h1>¿Cómo funciona?</h1>
        <p>
          Somos una empresa encargada de desarrollar estrategias para dar a
          conocer las marcas de nuestros clientes. Realizamos proyectos de
          marketing, desarrollo web y más. Inside Creative es clave para que tu
          marca funcione y logre un alcance importante.
        </p>
        <Button title="¡Quiero un proyecto!"/>
      </div>
      <figure>
        <img src={illustration} alt="loading img" />
      </figure>
    </section>
  );
}

export { Description };
