import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const countOfRounds = 3;

const game = (description, questionAndAnswer) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);

  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < countOfRounds; i += 1) {
    const pair = questionAndAnswer();
    const question = car(pair);
    const correctAnswer = cdr(pair);
    const answerUser = readlineSync.question(`\nQuestion: ${question}\n`);
    if (correctAnswer === answerUser) {
      console.log('\nCorrect!');
    } else {
      console.log(`\n'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulation, ${name}!`);
};

export default game;
