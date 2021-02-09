'use strict';

// Declaring the secret number. Using Math.trunc method to remove the decimal and Math.random to generate a number between 0 and 1. Multiplying by 20 and adding 1, to get a random number between 1 and 20.
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Declaring the score variable
let score = 20;

// Declare the highscore variable
let highScore = 0;

// Selecting the "Check" button. Adding an event listener so that when the button is clicked, we log the value in the input into a variable called "guess." Use the "Number" method to convert the input to a number.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // If there is not a number in the input field when the check button is clicked, change the message displayed to the user.
  if (!guess) {
    document.querySelector('.message').textContent = `⛔️ No number entered!`;
    // If the guess is equal to the SecretNumber (player wins), change message, display secret message and background color
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `✅ That's Correct!`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Compare score to highscore, if the score is greater than the current highscore, change the highscore to the score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
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

// Setting the functionality for the "Again" button to refresh the page.
// document.querySelector('.again').addEventListener('click', function () {
//   window.location.reload();
// });

// Setting the functionality for the "Again" button to refresh the page.
document.querySelector('.again').addEventListener('click', function () {
  // Set score back to 20
  score = 20;
  // Create new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Restore initial conditions of message, score and input field
  // Message
  document.querySelector('.message').textContent = `Start guessing...`;
  // Initial Score
  document.querySelector('.score').textContent = score;
  // Question Mark
  document.querySelector('.number').textContent = '?';
  // Input Field
  document.querySelector('.guess').value = ' ';
  // Restore the background color and number width
  // Background Color
  document.querySelector('body').style.backgroundColor = '#222';
  // Number Width
  document.querySelector('.number').style.width = '15rem';
});
