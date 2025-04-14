const realNumber = Math.floor(Math.random() * 19) + 1;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");

  if (guess === realNumber) {
    feedback.textContent = "🎉 Congratulations! You guessed it!";
  } else if (guess < realNumber) {
    feedback.textContent = "Too low! Try again.";
  } else {
    feedback.textContent = "Too high! Try again.";
  }
}
