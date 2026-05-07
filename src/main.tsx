import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import NavBar from "./components/navbar/Navbar";
import Cleanning from "./pages/cleanning/Cleanning";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<NavBar />} path="/">
        <Route element={<Cleanning />} path="cleanning" />
        {/* <Route/> */}
      </Route>
    </Routes>
  </BrowserRouter>,
);
