import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const game = (description, questionAndAnswer) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);

  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);

  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    const pair = questionAndAnswer();
    const question = car(pair);
    const correctAnswer = cdr(pair);
    const answerUser = readlineSync.question(`\nQuestion: ${question}\n`);
    if (correctAnswer === answerUser) {
      console.log('\nCorrect!');
    } else {
      return console.log(`\n'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default game;
