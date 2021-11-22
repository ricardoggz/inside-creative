import React from "react";
import "./about-styles/about.css";
//components
import { MemberCard } from "./about-components/MemberCard";

//img
import imgMember from "../../img/imgAbout/member-inside.jpg";
import imgMember2 from "../../img/imgAbout/member-inside-2.jpg";
import imgMember3 from "../../img/imgAbout/member-inside-3.jpg";

function About() {
  return (
    <section className="flex-container about-container">
      <MemberCard
        img={imgMember}
        name="Vania Cervantes"
        rol="Creadora, publicista y redactora de contenido"
        job="Co fundadora de Inside Creative"
      />
      <MemberCard
        img={imgMember2}
        name="Daniel Gonzales"
        rol="Community manager y creador de contenido digital"
        job="CEO y co fundador de Inside Creative"
      />
      <MemberCard
        img={imgMember3}
        name="Ricardo Guevara"
        rol="Creador de contenido digital y desarrollador web"
        job="Co fundador de Inside Creative"
      />
    </section>
  );
}
export { About };
