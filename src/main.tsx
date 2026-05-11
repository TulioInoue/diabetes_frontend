import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import NavBar from "./components/navbar/Navbar";
import Model from "./pages/model/Model";
import About from "./pages/about/About";
import Cleaning from "./pages/cleanning/Cleaning";
import Training from "./pages/training/Training";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<NavBar />} path="/">
        <Route element={<Cleaning />} path="cleaning" />
        <Route element={<Model />} path="model" />
        <Route element={<About />} path="about" />
        <Route element={<Training />} path="training" />
      </Route>
    </Routes>
  </BrowserRouter>,
);
