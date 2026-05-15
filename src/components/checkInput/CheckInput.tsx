import style from "./CheckInput.module.css";

import { useState } from "react";

interface CheckInputInterface {
  label: string;
  options: { name: string; value: string }[];
  onClickFunction: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function CheckInput({
  label,
  options,
  onClickFunction,
}: CheckInputInterface) {
  const [isChecked, setIsChecked] = useState(options[0].name);
  return (
    <div className={style.checkInput}>
      <p>{label}</p>
      <div>
        {options.map((option, key) => (
          <button
            key={key}
            type="button"
            className={
              isChecked === option.name
                ? style.checkInput__active
                : style.checkInput__deactive
            }
            value={option.value}
            onClick={(e) => {
              setIsChecked(option.name);
              onClickFunction(
                e as unknown as React.FormEvent<HTMLInputElement>,
              );
            }}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}
