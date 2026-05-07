import style from "./Navbar.module.css";
import { Outlet, Link } from "react-router";

export default function NavBar() {
  return (
    <main id={style.main}>
      <nav id={style.main__navbar}></nav>
      <Outlet />
    </main>
  );
}
