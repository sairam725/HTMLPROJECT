let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
    userInput.style.fontSize="40px";
    gameResult.style.fontSize="40px";
let randomNumber =Math.ceil(Math.random() * 100);
function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    console.log(guessedNumber);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "to high.try again";
        gameResult.style.backgroundColor = "blue";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "to low.try again";
        gameResult.style.backgroundColor = "blue";
    }else if (guessedNumber===randomNumber) {
            gameResult.textContent = "congratulations!";
            gameResult.style.backgroundColor = "green";

    }
}

