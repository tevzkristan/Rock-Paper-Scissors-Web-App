// Retrieve the score from localStorage on page load
let score = parseInt(localStorage.getItem("score")) || 0;
updateScoreDisplay();

const gameWindow = document.getElementById("game");

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScore(value) {
  score += value;
  if (score < 0) {
    score = 0; // Prevent the score from going below 0
  }
  localStorage.setItem("score", score); // Store the updated score in localStorage
  updateScoreDisplay();
}

function updateScoreDisplay() {
  document.getElementById("score-value").innerText = score;
}

function playGame(userChoice) {
  const bigCirclePerson = document.getElementById("big-circle-person");
  const bigCircleComputer = document.getElementById("big-circle-computer");
  const iconPerson = document.getElementById("picked-icon");
  const iconComputer = document.getElementById("computer-picked-icon");
  const gameResultDiv = document.getElementById("game-result-div-id");
  const resultText = document.getElementById("text-info");
  const computerPick = computerChoice();
  let result;

  if (userChoice === computerPick) {
    result = "IT'S A TIE";
    resultText.innerHTML = result;
  } else if (
    (userChoice === "rock" && computerPick === "scissors") ||
    (userChoice === "paper" && computerPick === "rock") ||
    (userChoice === "scissors" && computerPick === "paper")
  ) {
    result = "YOU WIN";
    updateScore(1);
    resultText.innerHTML = result;
  } else {
    result = "YOU LOSE";
    updateScore(-1);
    resultText.innerHTML = result;
  }

  // Display the result
  // alert(result);

  // Hide the DIV
  gameWindow.classList.add("game-hidden");
  gameResultDiv.classList.add("game-result-div-active");

  // Display correct color and icon of  the picked circle
  if (userChoice === "rock") {
    bigCirclePerson.classList.add("red");
    iconPerson.src = "./images/icon-rock.svg";
  }
  if (userChoice === "scissors") {
    bigCirclePerson.classList.add("yellow");
    iconPerson.src = "./images/icon-scissors.svg";
  }
  if (userChoice === "paper") {
    bigCirclePerson.classList.add("blue");
    iconPerson.src = "./images/icon-paper.svg";
  }
  if (computerPick === "rock") {
    bigCircleComputer.classList.add("red");
    iconComputer.src = "./images/icon-rock.svg";
  }
  if (computerPick === "scissors") {
    bigCircleComputer.classList.add("yellow");
    iconComputer.src = "./images/icon-scissors.svg";
  }
  if (computerPick === "paper") {
    bigCircleComputer.classList.add("blue");
    iconComputer.src = "./images/icon-paper.svg";
  }
}

// Call updateScoreDisplay on page load
updateScoreDisplay();

function pageReload() {
  location.reload();
}

function rulesShow() {
  document.getElementById("rules-div").style.display = "flex";
  document.getElementById("black-opacity").style.display = "block";
}

function closeRules() {
  document.getElementById("rules-div").style.display = "none";
  document.getElementById("black-opacity").style.display = "none";
}
