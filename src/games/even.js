import readlineSync from 'readline-sync';

export const description = () => console.log('Answer "yes" if number even otherwise answer "no".');

const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');
const rnd = (min, max) => Math.round(Math.random() * (max - min) + min);

export const game = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const numRnd = rnd(0, 100);
    const answerUser = readlineSync.question(`\nQuestion: ${numRnd}\n`);
    const correctAnswer = isEven(numRnd);
    if (correctAnswer === answerUser) {
      console.log('\nCorrect!');
    } else {
      return console.log(`\n'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
