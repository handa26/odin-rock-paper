let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const result = ["rock", "paper", "scissors"];
  const randomInt = Math.floor(Math.random() * 3);

  return result[randomInt];
};

const getHumanChoice = () => {
  const answer = prompt(`Please choose either "rock", "paper" or "scissors": `);

  return answer;
};

const playGame = () => {
  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log(`You lose! Paper beats Rock`);
      computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log(`You lose! Scissors beats Paper`);
      computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log(`You lose! Rock beats Scissors`);
      computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(`You win! Paper beats Rock`);
      humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(`You win! Scissors beats Paper`);
      humanScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`You win! Rock beats Scissors`);
      humanScore += 1;
    } else {
      console.log("Draw!");
    }
  };

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  console.log(`human score: ${humanScore}, comp score: ${computerScore}`);
};

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    playGame();
  }, 2000);
}
