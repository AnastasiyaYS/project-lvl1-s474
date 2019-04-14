import { cons, car, cdr } from 'hexlet-pairs';
import getRandomNumber from '../utils/randomNumber';
import play from '..';

const description = 'What is the result of the expression?';

const calculateAdd = (a, b) => a + b;
const calculateDiff = (a, b) => a - b;
const calculateMult = (a, b) => a * b;

const collectionOperations = new Map();
collectionOperations.set(calculateAdd, calculateDiff, calculateMult);
const countOperations = collectionOperations.size;

const getQuestionAndAnswer = () => {
  const operand1 = getRandomNumber(0, 10);
  const operand2 = getRandomNumber(0, 10);
  const numberOfOperation = getRandomNumber(0, countOperations);
  let operation;
  switch (numberOfOperation) {
    case 0:
      operation = cons('+', calculateAdd);
      break;
    case 1:
      operation = cons('-', calculateDiff);
      break;
    case 2:
      operation = cons('*', calculateMult);
      break;
    default:
      return cons('Error, press 0 to continue...', '0');
  }
  const operator = car(operation);
  const operationFunction = cdr(operation);
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(operationFunction(operand1, operand2));
  return cons(question, correctAnswer);
};

export default () => {
  play(description, getQuestionAndAnswer);
};
