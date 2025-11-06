let randomNumber;
let guesses;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    guesses = 0;
    document.getElementById("feedback").textContent = "";
    document.getElementById("guessCount").textContent = guesses;
    document.getElementById("guessInput").value = "";
}

function checkGuess() {
    const userGuess = Number(document.getElementById("guessInput").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("feedback").textContent = "Please enter a number between 1 and 100!";
        return;
    }

    guesses++;
    document.getElementById("guessCount").textContent = guesses;

    if (userGuess === randomNumber) {
        document.getElementById("feedback").textContent = `Correct! The number was ${randomNumber}.`;
    } else if (userGuess < randomNumber) {
        document.getElementById("feedback").textContent = "Too low! Try again.";
    } else {
        document.getElementById("feedback").textContent = "Too high! Try again.";
    }

    document.getElementById("guessInput").value = "";
}

startGame();