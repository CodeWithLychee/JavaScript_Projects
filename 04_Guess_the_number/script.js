let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
let userInput = document.querySelector("#guessField");
let submitButton = document.querySelector("#subt");
let guessSlot = document.querySelector(".guesses");
let remainingGuesses = document.querySelector(".lastresult");
let lowOrHi = document.querySelector(".lowOrHi");
let wrapper = document.querySelector("#wrapper");
let previousGuesses = [];

function ValidGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
    location.reload();
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
    location.reload();
  } else {
    previousGuesses.push(guess);
    guessSlot.innerHTML = previousGuesses;
    update_number_of_Guesses();
    checkGuess(guess);
    check_remaining_guess();
  }
}

function update_number_of_Guesses() {
  remainingGuesses.innerHTML = ` ${parseInt(remainingGuesses.innerHTML) - 1}`;
}

function checkGuess(guess) {
  if (guess < randomNumber) {
    lowOrHi.innerHTML = `<h3>Input number is too low.</h3>`;
  } else if (guess > randomNumber) {
    lowOrHi.innerHTML = `<h3>Input number is too High.</h3>`;
  } else {
    won_the_game();
  }
}

function check_remaining_guess() {
  let remainingChance = parseInt(remainingGuesses.innerHTML);
  if (remainingChance === 0) {
    loseGame();
  }
}

function loseGame() {
  wrapper.remove();

  let p = document.createElement("p");
  p.innerHTML = `<img style="width:500px;height:350px" src="../images/lose.gif"><br/><br/><h2 style="color:white;text-align:center ">No.... You Guessed the wrong Number!!<br/>Number was ${randomNumber}</h2>
  `;
  p.style.marginTop = "5%";
  p.style.display = "flex";
  p.style.justifyContent = "center";
  p.style.flexDirection = "column";
  p.style.alignItems = "center";
  document.querySelector("main").appendChild(p);

  start_new_game();
}

function won_the_game() {
  wrapper.remove();

  let p = document.createElement("p");
  p.innerHTML = `<img style="width:500px;height:350px" src="../images/win.gif"><br/><br/>
    <h2 style="color:white">Yeahh...You Guessed the correct Number!!</h2>`;
  p.style.marginTop = "5%";
  p.style.display = "flex";
  p.style.flexDirection = "column";
  p.style.justifyContent = "center";
  p.style.alignItems = "center";
  document.querySelector("main").appendChild(p);

  start_new_game();
}

function start_new_game() {
  let p = document.createElement("p");
  p.className = "startNewGame";
  p.innerHTML = `<button>Start a New game</button>`;
  p.style.textAlign = "center";
  document.querySelector("body").appendChild(p);

  const startButton = document.querySelector(".startNewGame button");
  startButton.style.padding = "15px";
  startButton.style.borderRadius = "10px";

  startButton.addEventListener("click", function (e) {
    e.preventDefault();
    location.reload();
  });
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  let guess = parseInt(userInput.value);
  ValidGuess(guess);

  userInput.value = "";
});
