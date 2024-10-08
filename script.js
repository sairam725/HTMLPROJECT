let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randamNumber = Math.ceil(Math.random()*100);
console.log(randamNumber);

    function checkGuess() {
        let guessedNumber = parseInt(userInput.value);
        if (guessedNumber > randomNumber){
        gameResult.textContent = "to high";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessedNumber < randomNumber){
     gameResult.textContent = "to high";
     gameResult.style.backgroundColor = "#1e217c";

     }
    else if (guessedNumber === randomNumber){
        gameResult.textContent = "congratulations";
        gameResult.style.backgroundColor = "#1e217c";
    }
}