import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/randomNumber';
import game from '..';

const description = 'What number is missing in the progression?';

const questionAndAnswer = () => {
  const rowBegin = getRandomNumber(0, 20);
  const stepProgression = getRandomNumber(1, 5);
  const rowLength = 10;
  const missPosition = getRandomNumber(0, rowLength);
  let question = '';
  let correctAnswer;

  let currentNumber = rowBegin;
  for (let i = 0; i < rowLength; i += 1) {
    if (i === missPosition) {
      question += '.. ';
      correctAnswer = currentNumber;
      currentNumber += stepProgression;
    } else {
      question += `${currentNumber} `;
      currentNumber += stepProgression;
    }
  }

  correctAnswer = String(correctAnswer);
  return cons(question, correctAnswer);
};

export default () => {
  game(description, questionAndAnswer);
};
