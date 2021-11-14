import React from "react";
import { Description } from "./home-components/Description";
import { Hero } from "./home-components/Hero";
import { Mision } from "./home-components/Mision";

function Home() {
  return (
    <>
      <Hero />
      <Description />
      <Mision/>
    </>
  );
}
export { Home };
