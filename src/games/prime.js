import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/randomNumber';
import play from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  play(description, getQuestionAndAnswer);
};
