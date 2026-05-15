import style from "./StandadInput.module.css";

import { useState } from "react";

interface StandadInputInterface {
  icon: string;
  type: "text" | "number";
  label: string;
  step?: string;
  placeholder?: string;
  handleError?: (e: React.FormEvent<HTMLInputElement>) => string;
  onChangeFunction?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function StandardInput({
  icon,
  type = "text",
  step,
  label,
  placeholder,
  handleError,
  onChangeFunction,
}: StandadInputInterface) {
  const [isIncorrect, setIsIncorrect] = useState("");

  function handleOnBlur(e: React.FormEvent<HTMLInputElement>) {
    if (handleError) {
      const result = handleError(e);
      setIsIncorrect(result);
    }
  }

  return (
    <div
      className={
        isIncorrect ? style.standardIncorrectInput : style.standardInput
      }
    >
      <p>{label}</p>
      <div className={style.standardInput__content}>
        <i className={icon}></i>
        <input
          type={type}
          step={step}
          placeholder={placeholder}
          onBlur={handleOnBlur}
          onChange={onChangeFunction}
        />
      </div>
      {isIncorrect && (
        <div className={style.standardInput__alert}>
          <i className="fi fi-ss-exclamation"></i>
          <span>{isIncorrect}</span>
        </div>
      )}
    </div>
  );
}
