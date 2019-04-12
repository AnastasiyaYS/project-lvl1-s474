import { cons } from 'hexlet-pairs';
import getRandomNumber from './modules/randomNumber';

export const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (a, b) => {
  if (b === 0) return a;
  return greatestCommonDivisor(b, a % b);
};

export const questionAndAnswer = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(greatestCommonDivisor(number1, number2));
  return cons(question, correctAnswer);
};
