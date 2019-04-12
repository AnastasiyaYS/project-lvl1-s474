import { cons, car, cdr } from 'hexlet-pairs';

export const description = 'What is the result of the expression?';

const add = (a, b) => a + b;
const diff = (a, b) => a - b;
const mult = (a, b) => a * b;
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export const questionAndAnswer = () => {
  const operand1 = getRandomNumber(0, 10);
  const operand2 = getRandomNumber(0, 10);
  const numberForOperatoin = getRandomNumber(0, 3);
  let operation;
  if (numberForOperatoin === 0) {
    operation = cons('+', add);
  } else if (numberForOperatoin === 1) {
    operation = cons('-', diff);
  } else operation = cons('*', mult);
  const question = `${operand1} ${car(operation)} ${operand2}`;
  const correctAnswer = String((cdr(operation))(operand1, operand2));
  return cons(question, correctAnswer);
};
