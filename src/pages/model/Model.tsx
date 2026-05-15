import style from "./Model.module.css";

import PredictionChart from "../../components/graphs/PredictionChart";
import Loading from "../../components/loading/Loading";
import StandardInput from "../../components/standardInput/StandardInput";
import CheckInput from "../../components/checkInput/CheckInput";
import Alert from "../../components/alert/Alert";

import { useState } from "react";

export default function Model() {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    text: string;
  }>({ text: "", type: "error" });
  const [formError, setFormError] = useState({
    age: true,
    weight: true,
    height: true,
  });
  const [loading, setLoading] = useState<boolean>();
  const [predictionResult, setPredictionResult] = useState<{
    diabetes: number;
    no_diabetes: number;
  } | null>(null);
  const [form, setForm] = useState({
    age: "",
    weight: "",
    height: "",
    polyuria: true,
    polydipsia: true,
    sudden_weight_loss: true,
    weakness: true,
    polyphagia: true,
    genital_thrush: true,
    visual_blurring: true,
    itching: true,
    delayed_healing: true,
    partial_paresis: true,
    muscle_stiffness: true,
    alopecia: true,
  });

  const questions: { text: string; target: keyof typeof form }[] = [
    {
      text: "Has experienced excessive or frequent urination?",
      target: "polyuria",
    },
    {
      text: "Has experienced excessive thirst or extreme fluid intake?",
      target: "polydipsia",
    },
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

    console.log(formError);

    if (formError.age || formError.height || formError.weight) {
      setAlert({ text: "Fields must be filled correctly", type: "error" });
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    setLoading(true);

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
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAlert({ text: "An unknow error occurred", type: "error" });
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      console.error("Erro ao conectar com a API:", error);
    }
  }

  return (
    <>
      {showAlert && <Alert type={alert.type} text={alert.text} />}
      {loading && <Loading />}
      <section id={style.model}>
        <div className={style.model__header}>
          <h2>Submit your answer</h2>
          <p>
            *This form is for demonstration purposes only and should not be
            taken seriously. The diagnosis cannot replace a medical opinion.
          </p>
          <hr />
        </div>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.model__inputs}>
            <StandardInput
              icon="fi fi-ss-age-alt"
              label="Age:"
              type="number"
              placeholder="0"
              onChangeFunction={(e) => {
                const validation = +e.currentTarget.value < 0;
                setFormError((current) => {
                  const newCurrent = { ...current };
                  newCurrent["age"] = validation;
                  return newCurrent;
                });
                handleOnChangeForm(e.currentTarget.value, "age");
              }}
              handleError={(e) => {
                const validation = +e.currentTarget.value < 0;
                return validation ? "Value should be positive" : "";
              }}
            />
            <StandardInput
              icon="fi fi-ss-text-height"
              label="Height (m):"
              type="number"
              step="0.01"
              placeholder="0.00"
              onChangeFunction={(e) => {
                const validation = +e.currentTarget.value < 0;
                setFormError((current) => {
                  const newCurrent = { ...current };
                  newCurrent["height"] = validation;
                  return newCurrent;
                });
                handleOnChangeForm(e.currentTarget.value, "height");
              }}
              handleError={(e) => {
                const validation = +e.currentTarget.value < 0;
                return validation ? "Value should be positive" : "";
              }}
            />
            <StandardInput
              icon="fi fi-ss-scale"
              label="Weight (kg):"
              type="number"
              step="0.01"
              placeholder="0.00"
              onChangeFunction={(e) => {
                const validation = +e.currentTarget.value < 0;
                setFormError((current) => {
                  const newCurrent = { ...current };
                  newCurrent["weight"] = validation;
                  return newCurrent;
                });
                handleOnChangeForm(e.currentTarget.value, "weight");
              }}
              handleError={(e) => {
                const validation = +e.currentTarget.value < 0;
                return validation ? "Value should be positive" : "";
              }}
            />
          </div>
          {questions.map((question, key) => (
            <CheckInput
              key={key}
              label={question.text}
              options={[
                { name: "Yes", value: "true" },
                { name: "No", value: "false" },
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
    </>
  );
}
