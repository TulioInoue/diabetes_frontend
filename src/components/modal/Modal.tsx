import style from "./Modal.module.css";

import { createPortal } from "react-dom";

interface ModalInterface {
  children: React.ReactNode;
  onClickFunction: () => void;
}

export default function Modal({ children, onClickFunction }: ModalInterface) {
  return createPortal(
    <aside id={style.modal}>
      <section className={style.modal__background} onClick={onClickFunction} />
      <section className={style.modal__content}>{children}</section>
    </aside>,
    document.getElementById("modal")!,
  );
}
