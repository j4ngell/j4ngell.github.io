//set variables
let ans;
let guesses = 0;

//generate random number
function setValue() {
  ans = Math.floor(Math.random() * 100) + 1;
}

//function to check guess
function checkGuess()
{
  const input = document.getElementById("guess");
  const guess = Number(input.value);
  const resultElement = document.getElementById("result");
  if (ans === guess) {
    resultElement.textContent = "Correct";
  } else if (ans > guess) {
    resultElement.textContent = "Try something larger";
  } else {
    resultElement.textContent = "Try something smaller";
  }

  input.value = 1;
  guessAttempt();
}

//function to attempt guess
function guessAttempt() 
{
  const guessesRemainingElement = document.getElementById("guesses-remaining");
  guesses++;
  if (guesses >= 10) {
    guessesRemainingElement.textContent = "0 guesses left";
  } else {
    guessesRemainingElement.textContent = `${10 - guesses} guesses remaining`;
  }
}