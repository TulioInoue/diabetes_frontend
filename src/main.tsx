import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import NavBar from "./pages/navbar/Navbar";
import About from "./pages/about/About";
import Model from "./pages/model/Model";
import Analysis from "./pages/analisys/Analysis";
import Training from "./pages/analisys/training/Training";
import Cleaning from "./pages/analisys/cleaning/Cleaning";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<NavBar />} path="/">
        <Route element={<About />} path="about" />
        <Route element={<Model />} path="model" />
        <Route element={<Analysis />} path="analisys">
          <Route element={<Cleaning />} path="cleaning" />
          <Route element={<Training />} path="training" />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
