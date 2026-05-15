import style from "./Alert.module.css";

import { createPortal } from "react-dom";

interface alertInterface {
  text: string;
  type: "success" | "error";
}

export default function Alert({ text, type }: alertInterface) {
  return createPortal(
    <dialog id={style.alert}>
      <div
        className={
          type === "success"
            ? style.alert__icon_success
            : style.alert__icon_error
        }
      >
        {type === "success" ? (
          <i className="fi fi-ss-check-circle"></i>
        ) : (
          <i className="fi fi-ss-exclamation"></i>
        )}
      </div>
      <div className={style.alert__content}>
        <p>{text}</p>
      </div>
    </dialog>,
    document.getElementById("alert")!,
  );
}
