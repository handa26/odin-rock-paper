const getComputerChoice = () => {
  const result = ["rock", "paper", "scissors"];
  const randomInt = Math.floor(Math.random() * 3);

  return result[randomInt];
};