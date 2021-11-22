import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import { Home } from "../scenes/home/Home";
import { About } from "../scenes/about/About";

function RoutesApp() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} exact />
      </Routes>
      <Routes>
        <Route path="/services" />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export { RoutesApp };
