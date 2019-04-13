import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/randomNumber';
import game from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) return a;
  return getGreatestCommonDivisor(b, a % b);
};

const questionAndAnswer = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGreatestCommonDivisor(number1, number2));
  return cons(question, correctAnswer);
};

export default () => {
  game(description, questionAndAnswer);
};
