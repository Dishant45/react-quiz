import uniqid from "uniqid";

const questions = [
  {
    questionId: uniqid(),
    questionStatement: "what is 4-2",
    options: [
      {
        value: 1,
        isCorrect: false,
      },
      {
        value: 2,
        isCorrect: true,
      },
      {
        value: 3,
        isCorrrect: false,
      },
      {
        value: 4,
        isCorrect: false,
      },
    ],
  },
  {
    questionId: uniqid(),
    questionStatement: "what is 7*7",
    options: [
      {
        value: 14,
        isCorrect: false,
      },
      {
        value: 49,
        isCorrect: true,
      },
      {
        value: 21,
        isCorrrect: false,
      },
      {
        value: 48,
        isCorrect: false,
      },
    ],
  },
  {
    questionId: uniqid(),
    questionStatement: "what is squareroot of 64",
    options: [
      {
        value: 7,
        isCorrect: false,
      },
      {
        value: 8,
        isCorrect: true,
      },
      {
        value: 9,
        isCorrrect: false,
      },
      {
        value: 16,
        isCorrect: false,
      },
    ],
  },
  {
    questionId: uniqid(),
    questionStatement: "what is 4+2",
    options: [
      {
        value: 4,
        isCorrect: false,
      },
      {
        value: 6,
        isCorrect: true,
      },
      {
        value: 3,
        isCorrrect: false,
      },
      {
        value: 7,
        isCorrect: false,
      },
    ],
  },
  {
    questionId: uniqid(),
    questionStatement: "what is 16/2",
    options: [
      {
        value: 6,
        isCorrect: false,
      },
      {
        value: 8,
        isCorrect: true,
      },
      {
        value: 3,
        isCorrrect: false,
      },
      {
        value: 4,
        isCorrect: false,
      },
    ],
  },
];
export default questions;
