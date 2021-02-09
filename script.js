'use strict';

// Declaring the secret number. Using Math.trunc method to remove the decimal and Math.random to generate a number between 0 and 1. Multiplying by 20 and adding 1, to get a random number between 1 and 20.
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Declaring the score variable
let score = 20;

// Declare the highscore variable
let highScore = 0;

// A function to set the text content for the message the user sees based on their guess
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// a function to set the text content for the score
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// A function to change the text content of the number class (question mark)
const changeNumberContent = function (value) {
  document.querySelector('.number').textContent = value;
};

// A function to change the styling for the number class (question mark)
const changeNumberStyle = function (style) {
  document.querySelector('.number').style.width = style;
};

// A function to change the style of the body
const changeBodyStyle = function (style) {
  document.querySelector('body').style.backgroundColor = style;
};

// Selecting the "Check" button. Adding an event listener so that when the button is clicked, we log the value in the input into a variable called "guess." Use the "Number" method to convert the input to a number.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // If there is not a number in the input field when the check button is clicked, change the message displayed to the user.
  if (!guess) {
    displayMessage(`⛔️ No number entered!`);
    // If the guess is equal to the SecretNumber (player wins), change message, display secret message and background color
  } else if (guess === secretNumber) {
    displayMessage(`✅ That's Correct!`);
    changeNumberContent(secretNumber);
    changeBodyStyle('#60b347');
    changeNumberStyle('30rem');

    // Compare score to highscore, if the score is greater than the current highscore, change the highscore to the score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high or too low - change user message, decrease score by 1. If the score gets below 1, the game is over.
  } else if (guess !== secretNumber) {
    displayMessage(
      guess > secretNumber
        ? `❌ Your guess is too high.`
        : `❌ Your guess is too low.`
    );
    score--;
    setScore(score);
  } else {
    displayMessage(`You lost. The game is over. 😭`);
    setScore(0);
  }
});

// Setting the functionality for the "Again" button to refresh the page.
document.querySelector('.again').addEventListener('click', function () {
  // Set score back to 20
  score = 20;
  // Create new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Restore initial conditions of message, score and input field
  // Message
  displayMessage(`Start guessing...`);
  // Initial Score
  setScore(score);
  // Question Mark
  changeNumberContent('?');
  // Input Field
  document.querySelector('.guess').value = ' ';
  // Restore the background color and number width
  // Background Color
  changeBodyStyle('#222');
  // Number Width
  changeNumberStyle('15rem');
});
