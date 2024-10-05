const getComputerChoice = () => {
  const result = ["rock", "paper", "scissors"];
  const randomInt = Math.floor(Math.random() * 3);

  return result[randomInt];
};

const getHumanChoice = () => {
  const answer = prompt(`Please choose either "rock", "paper" or "scissors": `);

  console.log(answer);
};
