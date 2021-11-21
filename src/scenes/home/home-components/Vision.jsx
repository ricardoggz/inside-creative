import React from "react";
import visionimg from "../../../img/imgHome/vision.png";
import "../home-styles/description.css";

function Vision() {
  return (
    <section className="flex-container description-container">
      <div>
        <h1>Nuestra Visión</h1>
        <p>
          Marcar tendencia y liderar la industria digital por medio de
          soluciones creativas y tecnológicamente robustas. Ofrecerles a
          nuestros clientes un servicio acorde a las expectativas acordadas.
          Ayudarles a nuestros clientes a llegar a sus objetivos y llegar a más
          consumidores. Ser la mejor agencia de marketing digital de México y
          Latinoamérica. 🖐
        </p>
      </div>
      <figure>
        <img src={visionimg} alt="loading img" />
      </figure>
    </section>
  );
}

export { Vision };
