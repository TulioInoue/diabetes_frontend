import style from "./Analysis.module.css";

import { Outlet } from "react-router";

export default function Analysis() {
  return (
    <section id={style.analisys}>
      <Outlet />
    </section>
  );
}
