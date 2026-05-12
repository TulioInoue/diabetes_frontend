import style from "./Model.module.css";

import RadioInput from "../../components/radioInput/RadioInput";
import PredictionChart from "../../components/graphs/PredictionChart";

import { useState } from "react";

export default function Model() {
  const [predictionResult, setPredictionResult] = useState<{
    diabetes: number;
    no_diabetes: number;
  } | null>(null);
  const [form, setForm] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "Male",
    sudden_weight_loss: false,
    weakness: false,
    polyphagia: false,
    genital_thrush: false,
    visual_blurring: false,
    itching: false,
    irritability: false,
    delayed_healing: false,
    partial_paresis: false,
    muscle_stiffness: false,
    alopecia: false,
  });

  const questions: { text: string; target: keyof typeof form }[] = [
    {
      text: "Occurrence of a rapid and unexpected decrease in body weight?",
      target: "sudden_weight_loss",
    },
    {
      text: "Has been feeling fatigue or lack of physical strength?",
      target: "weakness",
    },
    {
      text: "Has been feeling a lot of hunger?",
      target: "polyphagia",
    },
    {
      text: "Presence of a yeast infection (candidiasis) in the genital area?",
      target: "genital_thrush",
    },
    {
      text: "Has episodes of blurred or distorted vision?",
      target: "visual_blurring",
    },
    {
      text: "Has general skin irritation or itchy sensations?",
      target: "itching",
    },
    {
      text: "Has heightened emotional sensitivity or agitation?",
      target: "irritability",
    },
    {
      text: "Noticeable slowness in the recovery of wounds or cuts?",
      target: "delayed_healing",
    },
    {
      text: "Has weakening or partial loss of voluntary movement in a muscle group?",
      target: "partial_paresis",
    },
    {
      text: "Has episodes of muscle rigidity or difficulty in movement?",
      target: "muscle_stiffness",
    },
    {
      text: "Sudden or patchy hair loss?",
      target: "alopecia",
    },
  ];

  function handleOnChangeForm(
    value: string | boolean,
    variable: keyof typeof form,
  ) {
    setForm((current) => {
      let newValue: any = value;
      if (newValue === "true") newValue = true;
      if (newValue === "false") newValue = false;

      return {
        ...current,
        [variable]: newValue,
      };
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const payload = {
      ...form,
      obesity: +form.weight / (+form["height"]) ** 2 >= 30,
    };

    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Erro na predição");

      const data = await response.json();
      setPredictionResult({
        diabetes: data.percentage,
        no_diabetes: 1 - data.percentage,
      });
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
    }
  }

  return (
    <section id={style.model}>
      <div className={style.model__header}>
        <h2>Submit your answer</h2>
        <hr />
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.model__inputs}>
          <div className={style.model__input}>
            <label htmlFor="age">Age:</label>
            <input
              required
              type="number"
              id="age"
              onChange={(e) => handleOnChangeForm(e.currentTarget.value, "age")}
            />
          </div>
          <div className={style.model__select}>
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              id="gender"
              onChange={(e) =>
                handleOnChangeForm(e.currentTarget.value, "gender")
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className={style.model__input}>
            <label htmlFor="height">Height:</label>
            <input
              required
              type="number"
              id="height"
              step="0.01"
              onChange={(e) =>
                handleOnChangeForm(e.currentTarget.value, "height")
              }
            />
          </div>
          <div className={style.model__input}>
            <label htmlFor="height">Weight:</label>
            <input
              required
              type="number"
              id="weight"
              step="0.01"
              onChange={(e) =>
                handleOnChangeForm(e.currentTarget.value, "weight")
              }
            />
          </div>
        </div>
        {questions.map((question, key) => (
          <RadioInput
            key={key}
            text={question.text}
            options={[
              { name: "Yes", value: "true", anchor: question.target },
              { name: "No", value: "false", anchor: question.target },
            ]}
            onClickFunction={(e) =>
              handleOnChangeForm(e.currentTarget.value, question.target)
            }
          />
        ))}

        <button type="submit" className={style.model__button}>
          Check
        </button>
      </form>
      {predictionResult && (
        <PredictionChart
          diabetes={predictionResult.diabetes}
          no_diabetes={predictionResult.no_diabetes}
        />
      )}
    </section>
  );
}
