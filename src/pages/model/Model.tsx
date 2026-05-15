import style from "./Model.module.css";

import DonutChart from "../../components/graphs/Donut";
import Loading from "../../components/loading/Loading";
import StandardInput from "../../components/standardInput/StandardInput";
import CheckInput from "../../components/checkInput/CheckInput";
import Alert from "../../components/alert/Alert";
import Modal from "../../components/modal/Modal";

import { useState } from "react";
import { formState, formErrorState, questions } from "./model_questions";

export default function Model() {
  // Defining standard states variables:
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [formError, setFormError] = useState(formErrorState);
  const [loading, setLoading] = useState<boolean>();
  const [form, setForm] = useState(formState);
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    text: string;
  }>({ text: "", type: "error" });

  // Defining fetch result:
  const [predictionResult, setPredictionResult] = useState<
    | {
        name: string;
        value: number;
        color: string;
      }[]
    | null
  >(null);

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
      setPredictionResult([
        {
          name: "diabetes",
          value: data.percentage,
          color: "#c56715",
        },
        {
          name: "healthy",
          value: 1 - data.percentage,
          color: "#1c3148",
        },
      ]);
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
      {predictionResult && (
        <Modal onClickFunction={() => setPredictionResult(null)}>
          <DonutChart
            data={predictionResult}
            fontsize={24}
            title="Diabetes probability"
            color={["#1c3148", "#c56715"]}
            titleColor="#212529"
            tooltipBackground="#717a83"
          />
        </Modal>
      )}
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
              options={question.options}
              onClickFunction={(e) =>
                handleOnChangeForm(e.currentTarget.value, question.target)
              }
            />
          ))}

          <button type="submit" className={style.model__button}>
            Check
          </button>
        </form>
      </section>
    </>
  );
}
