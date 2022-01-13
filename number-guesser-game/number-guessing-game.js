let prompt = require("prompt-sync")();
let answer = prompt("Guess a number between 1 and 100: ");
let randomNumber = Math.floor(Math.random() * 100 + 1);
let guesses = 1;
let entries = [];

const numberGuesser = function (num) {
  if (isNaN(num)) {
    answer = prompt("That's not a number. Please guess a number: ");
    numberGuesser(answer);
  } else {
    num = Number(num);
    console.log(randomNumber);

    if (num === randomNumber) {
      return console.log("You win! It only took you " + guesses + " tries!");
    }

    if (entries.includes(num)) {
      answer = prompt("You can't guess a number that has been previously guessed. Please enter a different number: ");
      numberGuesser(answer);
    } else {
      entries.push(num);

      if (num > randomNumber) {
        answer = prompt("The number is smaller. Guess again: ");
        guesses++;
        console.log("guesses: ", guesses);
        numberGuesser(answer);
      }
    
      if (num < randomNumber) {
        answer = prompt("The number is larger. Guess again: ");
        guesses++;
        console.log("guesses: ", guesses);
        numberGuesser(answer);
      }
    }
  }
}

numberGuesser(answer);