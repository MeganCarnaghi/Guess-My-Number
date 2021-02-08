'use strict';

// Declaring the secret number. Using Math.trunc method to remove the decimal and Math.random to generate a number between 0 and 1. Multiplying by 20 and adding 1, to get a random number between 1 and 20.
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// Declaring the score variable
let score = 20;

// Selecting the "Check" button. Adding an event listener so that when the button is clicked, we log the value in the input into a variable called "guess." Use the "Number" method to convert the input to a number.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // If there is not a number in the input field when the check button is clicked, change the message displayed to the user.
  if (!guess) {
    document.querySelector('.message').textContent = `⛔️ No number entered!`;
    // If the guess is equal to the SecretNumber...
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `✅ That's Correct!`;
    // If the guess is higher than the SecretNumber, change user message, decrease score by 1. If the score gets below 1, the game is over.
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(
        '.message'
      ).textContent = `❌ Your guess is too high.`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `You lost. The game is over. 😭`;
      document.querySelector('.score').textContent = 0;
    }

    // If the guess is lower than the SecretNumber, change user message, decrease score by 1. If the score gets below 1, the game is over.
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(
        '.message'
      ).textContent = `❌ Your guess is too low.`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `You lost. The game is over. 😭`;
      document.querySelector('.score').textContent = 0;
    }
  }
});
