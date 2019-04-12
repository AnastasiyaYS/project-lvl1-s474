import { cons, car, cdr } from 'hexlet-pairs';
import getRandomNumber from './modules/randomNumber';

export const description = 'What is the result of the expression?';

const add = (a, b) => a + b;
const diff = (a, b) => a - b;
const mult = (a, b) => a * b;

export const questionAndAnswer = () => {
  const operand1 = getRandomNumber(0, 10);
  const operand2 = getRandomNumber(0, 10);
  const countOperations = 3;
  const numberForOperatoin = getRandomNumber(0, countOperations);
  let operation;
  switch (numberForOperatoin) {
    case 0:
      operation = cons('+', add);
      break;
    case 1:
      operation = cons('-', diff);
      break;
    default:
      operation = cons('*', mult);
  }
  const operationSign = car(operation);
  const operationFunction = cdr(operation);
  const question = `${operand1} ${operationSign} ${operand2}`;
  const correctAnswer = String(operationFunction(operand1, operand2));
  return cons(question, correctAnswer);
};
