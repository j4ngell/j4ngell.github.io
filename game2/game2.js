//set variables
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

//set event listeners
rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissor.addEventListener("click", play);

//play function
function play() {
  const val = Math.floor(Math.random() * 3);
  const computer = ["rock", "paper", "scissor"][val];
  document.querySelector("#computer").textContent = "Computer choice: " + computer;
  const player = this.id;
  const gameResult = document.querySelector("#result");
  //check outcome of game
  if (player === computer) {
    gameResult.textContent = "Draw";
  } else if ((player === "rock" && computer === "scissor") || (player === "paper" && computer === "rock") || (player === "scissor" && computer === "paper")) {
    gameResult.textContent = "You Win";
  } else {
    gameResult.textContent = "You Lose";
  }
}