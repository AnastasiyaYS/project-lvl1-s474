import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const countOfRounds = 3;

const play = (description, getQuestionAndAnswer) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);

  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < countOfRounds; i += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    const question = car(questionAndAnswer);
    const correctAnswer = cdr(questionAndAnswer);
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

export default play;
