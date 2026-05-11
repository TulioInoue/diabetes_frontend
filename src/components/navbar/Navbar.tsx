import style from "./Navbar.module.css";
import { Outlet, Link, useLocation } from "react-router";
import { useState } from "react";

interface NavbarLinkInterface {
  path: string;
  pathName: string;
}

function NavbarLink({ path, pathName }: NavbarLinkInterface) {
  const location = useLocation().pathname;
  return (
    <div
      className={
        location === path
          ? style.main__navbar_selected
          : style.main__navbar_unselected
      }
    >
      <Link to={path}>
        <h3>{pathName}</h3>
      </Link>
    </div>
  );
}

export default function NavBar() {
  const [navbar, setNavbar] = useState<boolean>();

  return (
    <main id={style.main}>
      <nav
        id={style.main__navbar}
        className={
          navbar ? style.main__navbar_active : style.main__navbar_deactive
        }
      >
        <div className={style.main__navbar_header}>
          <img src="icons/brain.svg" alt="" />
          <h2>diabetes detection</h2>
        </div>
        <div className={style.main__navbar_body}>
          <NavbarLink path="/model" pathName="model" />
          <NavbarLink path="/about" pathName="about" />
          <NavbarLink path="/cleaning" pathName="cleaning" />
          <NavbarLink path="/training" pathName="training" />
        </div>
        <div className={style.main__navbar_tail}>
          <a href="https://github.com/TulioInoue" target="_blank">
            <i className="fi fi-brands-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/tulio-inoue-datascientist/"
            target="_blank"
          >
            <i className="fi fi-brands-linkedin" />
          </a>
        </div>
      </nav>
      <article id={style.main__content}>
        <span
          onClick={() => setNavbar(false)}
          id={style.main__content__background}
          className={
            navbar
              ? style.main__content__background_active
              : style.main__content__background_deactive
          }
        />
        <button
          onClick={() => setNavbar(true)}
          id={style.main__content__button}
        >
          <i className="fi fi-ss-menu-burger"></i>
        </button>
        <Outlet />
      </article>
    </main>
  );
}
