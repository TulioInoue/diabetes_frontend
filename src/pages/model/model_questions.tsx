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

export const questions: {
  text: string;
  target: keyof typeof formState;
  options: { name: string; value: string }[];
}[] = [
  {
    text: "Has experienced excessive or frequent urination?",
    target: "polyuria",
    options: [
      { name: "Yes", value: "true" },
      { name: "No", value: "false" },
    ],
  },
  {
    text: "Has experienced excessive thirst or extreme fluid intake?",
    target: "polydipsia",
    options: [
      { name: "Yes", value: "true" },
      { name: "No", value: "false" },
    ],
  },
  {
    text: "Occurrence of a rapid and unexpected decrease in body weight?",
    target: "sudden_weight_loss",
    options: [
      { name: "Yes", value: "true" },
      { name: "No", value: "false" },
    ],
  },
  {
    text: "Has been feeling fatigue or lack of physical strength?",
    target: "weakness",
    options: [
      { name: "Yes", value: "true" },
      { name: "No", value: "false" },
    ],
  },
  {
    text: "Has been feeling a lot of hunger?",
    target: "polyphagia",
    options: [
      { name: "Yes", value: "true" },
      { name: "No", value: "false" },
    ],
  },
  {
    text: "Presence of a yeast infection (candidiasis) in the genital area?",
    target: "genital_thrush",
    options: [
      { name: "Yes", value: "true" },
      { name: "No", value: "false" },
    ],
  },
  {
    text: "Has episodes of blurred or distorted vision?",
    target: "visual_blurring",
    options: [
      { name: "Yes", value: "true" },
      { name: "No", value: "false" },
    ],
  },
  {
    text: "Has general skin irritation or itchy sensations?",
    target: "itching",
    options: [
      { name: "Yes", value: "true" },
      { name: "No", value: "false" },
    ],
  },
  {
    text: "Noticeable slowness in the recovery of wounds or cuts?",
    target: "delayed_healing",
    options: [
      { name: "Yes", value: "true" },
      { name: "No", value: "false" },
    ],
  },
  {
    text: "Has weakening or partial loss of voluntary movement in a muscle group?",
    target: "partial_paresis",
    options: [
      { name: "Yes", value: "true" },
      { name: "No", value: "false" },
    ],
  },
  {
    text: "Has episodes of muscle rigidity or difficulty in movement?",
    target: "muscle_stiffness",
    options: [
      { name: "Yes", value: "true" },
      { name: "No", value: "false" },
    ],
  },
  {
    text: "Sudden or patchy hair loss?",
    target: "alopecia",
    options: [
      { name: "Yes", value: "true" },
      { name: "No", value: "false" },
    ],
  },
];
