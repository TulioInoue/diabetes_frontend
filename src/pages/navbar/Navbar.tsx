import style from "./Navbar.module.css";
import { Outlet } from "react-router";
import { useState } from "react";

import { navlinks, title } from "./navbar_links";
import NavbarLink from "./navlink/navLink";

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
          <div>
            <i className="fi fi-ss-book-brain" />
            <h2>{title}</h2>
          </div>
          <hr />
        </div>
        <div className={style.main__navbar_body}>
          {navlinks.map((link, key) => (
            <NavbarLink key={key} {...link} />
          ))}
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
