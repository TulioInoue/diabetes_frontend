import style from "./Loading.module.css";

import { createPortal } from "react-dom";

export default function Loading() {
  return createPortal(
    <aside id={style.loading}>
      <div className={style.loading__background} />
      <div className={style.loading__content}>
        <span className={style.loading__content__span_1} />
        <span className={style.loading__content__span_2} />
        <span className={style.loading__content__span_3} />
      </div>
    </aside>,
    document.getElementById("loading")!,
  );
}
