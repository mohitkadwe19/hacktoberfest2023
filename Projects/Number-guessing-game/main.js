let game = { min: 1, max: 10 };

game.button = document.querySelector("button");
game.guessInput = document.querySelector("input");
game.message = document.querySelector(".message");
game.output = document.querySelector(".output");

console.log(game);

game.button.addEventListener("click", guessValue);

gameInit();

function guessValue() {
  if (game.button.classList.contains("replay")) {
    gameInit();
    game.button.innerHTML = "Guess";
    game.guessInput.style.display = "block";
    game.button.classList.remove("replay");
  } else {
    game.guesses++;
    let userGuess = game.guessInput.value;
    game.guessInput.value = "";
    userGuess = parseInt(userGuess);

    if (isNaN(userGuess)) {
      message("Please enter only Digits", "red");
    } else if (userGuess === game.num) {
      message(
        `Correct, you guessed ${game.num} in ${game.guesses} guesses`,
        "green"
      );
      gameOver();
    } else {
      let displayMessage =
        userGuess > game.num
          ? { color: "blue", message: "Was Lower" }
          : { color: "purple", message: "Was Higher" };
      message(`${displayMessage.message}`, displayMessage.color);
    }
  }
}

function gameOver() {
  game.button.innerHTML = "Restart Game";
  game.guessInput.style.display = "none";
  game.button.classList.add("replay");
  game.max += 5;
}

function gameInit() {
  game.guesses = 0;
  game.num = randomNumber(game.min, game.max);

  let tempMessage = `Welcome to the game. Guess a number from ${game.min} to ${game.max}`;

  message(tempMessage, "blue");
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function message(mes, clr) {
  game.message.innerHTML = mes;
  game.message.style.color = clr || "black";

  game.guessInput.style.borderColor = clr || "black";

  game.button.style.backgroundColor = clr || "black";
  game.button.style.color = "white";
}
