import React from "react";
import "../about/about-styles/about.css";

//components
import { MemberCard } from "../about/about-components/MemberCard";
import {Button} from "../../components/button/Button";

//img
import packone from "../../img/imgShop/pack-1.png";
import packtwo from "../../img/imgShop/pack-2.png";
import packthree from "../../img/imgShop/pack-3.png";
import packfour from "../../img/imgShop/pack-4.png";
import packfive from "../../img/imgShop/pack-5.png";
import packsix from "../../img/imgShop/pack-6.png";

function Shop() {
  return (
    <section className="flex-container about-container">
      <h1>Nuestros servicios y paquetes</h1>
      <div className="about-cards-container">
        <MemberCard
          img={packone}
          name="Paquete completo"
          rol="Arquitectura de marca"
          job="Página web y hosting de 1 año"
          price="$26,000 mxn"
          button={<Button title="Adquirir plan"/>}
        />
        <MemberCard
          img={packtwo}
          name="Arquitectura de marca"
          rol="Briefing, diseo de logotipo"
          job="Manejo de redes sociales"
          price="$8,000 mxn"
          button={<Button title="Adquirir plan"/>}
        />
        <MemberCard
          v
          img={packthree}
          name="Imágen corporativa"
          rol="Creación y diseño de imágen"
          job="Estructura de imágen"
          price="$6,400 mxn"
          button={<Button title="Adquirir plan"/>}
        />
        <MemberCard
          v
          img={packfour}
          name="Página o APP web"
          rol="Diseño y creación del sitio"
          job="Hosting y dominio de 1 año"
          price="$10,000 mxn"
          button={<Button title="Adquirir plan"/>}
        />
        <MemberCard
          v
          img={packfive}
          name="Diseño de logotipo"
          rol="Diseño y creación de logotipo"
          job="3 propuestas de cambio"
          price="$3,800 mxn"
          button={<Button title="Adquirir plan"/>}
        />
        <MemberCard
          v
          img={packsix}
          name="Diseño de empaque"
          rol="Diseño y creación de empaque"
          job="3 propuestas de cambio"
          price="$4,400 mxn"
          button={<Button title="Adquirir plan"/>}
        />
      </div>
    </section>
  );
}
export { Shop };
