import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import { Home } from "../scenes/home/Home";
import { About } from "../scenes/about/About";
import { Shop } from "../scenes/shop/Shop";

function RoutesApp() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} exact />
      </Routes>
      <Routes>
        <Route path="/services" element={<Shop />} exact/>
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </>
  );
}
export { RoutesApp };
