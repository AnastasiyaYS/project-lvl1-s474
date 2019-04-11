import readlineSync from 'readline-sync';

export const welcome = () => console.log('\nWelcome to the Brain Games!');
export const hello = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
