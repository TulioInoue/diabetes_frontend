export const formErrorState = {
  age: true,
  weight: true,
  height: true,
};

export const formState = {
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
};

export const questions: { text: string; target: keyof typeof formState }[] = [
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
