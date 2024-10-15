const displayHumanScore = document.querySelector("#human-score");
const displayCompScore = document.querySelector("#comp-score");
const matchResult = document.querySelector("#match-result");

let humanScore = 0;
let computerScore = 0;
let message;

const getComputerChoice = () => {
  const result = ["rock", "paper", "scissors"];
  const randomInt = Math.floor(Math.random() * 3);

  return result[randomInt];
};

const result = document.querySelector("#result");
displayHumanScore.innerHTML = humanScore;
displayCompScore.innerHTML = computerScore;

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === "rock" && computerChoice === "paper") {
    result.innerHTML = "You lose! Paper beats Rock";
    displayCompScore.innerHTML = computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result.innerHTML = "You lose! Scissors beats Paper";
    displayCompScore.innerHTML = computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result.innerHTML = "You lose! Rock beats Scissors";
    displayCompScore.innerHTML = computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result.innerHTML = "You win! Paper beats Rock";
    displayHumanScore.innerHTML = humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result.innerHTML = "You win! Scissors beats Paper";
    displayHumanScore.innerHTML = humanScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result.innerHTML = "You win! Rock beats Scissors";
    displayHumanScore.innerHTML = humanScore += 1;
  } else {
    result.innerHTML = "Draw!";
  }

  if (humanScore === 5) {
    matchResult.innerHTML = "Human Win!!!";
  } else if (computerScore === 5) {
    matchResult.innerHTML = "Computer Win!!!";
  }
};


let humanSelection;

const displaySelection = document.querySelector("#display-selection");
const selectionBtn = document.querySelectorAll(".selection-btn");
const play = document.querySelector("#play-round");

selectionBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (computerScore === 5 || humanScore === 5) return;

    displaySelection.innerHTML = e.target.innerText;
    humanSelection = e.target.innerText.toLowerCase();
  })
);

play.addEventListener("click", () => {
  if (displaySelection.innerHTML === "" || computerScore === 5 || humanScore === 5) return;
  
  playRound(humanSelection, getComputerChoice());
  displaySelection.innerHTML = "";
});