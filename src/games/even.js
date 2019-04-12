import { cons } from 'hexlet-pairs';
import getRandomNumber from './modules/randomNumber';

export const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num % 2 === 0);

export const questionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};
