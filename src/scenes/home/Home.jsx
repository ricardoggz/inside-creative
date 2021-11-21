import React from "react";
import { Description } from "./home-components/Description";
import { Hero } from "./home-components/Hero";
import { Mision } from "./home-components/Mision";
import { Vision } from "./home-components/Vision";

function Home() {
  return (
    <>
      <Hero />
      <Description />
      <Mision/>
      <Vision/>
    </>
  );
}
export { Home };
