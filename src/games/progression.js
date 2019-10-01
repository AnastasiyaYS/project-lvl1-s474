import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/randomNumber';
import play from '..';

const description = 'What number is missing in the progression?';

const getQuestion = (begin, step, missingPosition, length, row) => {
  if (length === 0) return row;
  if (length - 1 === missingPosition) {
    return getQuestion(begin, step, missingPosition, length - 1, `.. ${row}`);
  }
  return getQuestion(begin, step, missingPosition, length - 1, `${begin + (length - 1) * step} ${row}`);
};

const length = 10;
const getQuestionAndAnswer = () => {
  const begin = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 5);

  const missingPosition = getRandomNumber(0, length);

  const question = getQuestion(begin, step, missingPosition, length, '');
  const correctAnswer = String(begin + step * missingPosition);
  return cons(question, correctAnswer);
};

export default () => {
  play(description, getQuestionAndAnswer);
};
