import style from "./RadioInput.module.css";

interface RadioInputInterface {
  text: string;
  options: {
    name: string;
    value: string;
    anchor: string;
  }[];
  onClickFunction: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function RadioInput({
  text,
  options,
  onClickFunction,
}: RadioInputInterface) {
  return (
    <fieldset className={style.radioInput}>
      <legend>{text}</legend>
      {options.map((option, key) => (
        <div key={key}>
          <input
            type="radio"
            id={option.name}
            name={option.anchor}
            value={option.value}
            onClick={onClickFunction}
            required
          />
          <label htmlFor={option.name}>{option.name}</label>
        </div>
      ))}
    </fieldset>
  );
}
