let arr_length = document.querySelectorAll(".js-img-cls").length
let intervalId ;
let score = JSON.parse(localStorage.getItem('score')) ||
{
  Wins: 0,
  Losses: 0,
  Tie: 0
};

function randomMove() {

  let computerKey = '';
  let num1 = Math.round(Math.random() * 2)

  if (num1 === 0) {
    computerKey = 'Rock'
  }
  else if (num1 === 1) {
    computerKey = 'Paper'
  }
  else if (num1 === 2) {
    computerKey = 'Scissors'
  }

     return computerKey;

}

let isAutoPlaying = false;
let buttonElement = document.querySelector(".auto-js")

function autoPlay (){

   if (!isAutoPlaying){
     intervalId = setInterval( ()=> {
      let randomUserMove = randomMove();
      gamePlay(randomUserMove);
    }, 1000)
    isAutoPlaying = true;
    buttonElement.textContent = "Stop Play"
   }
   else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    buttonElement.textContent = "Auto Play"
   }
          
  }



function gamePlay(userKey) {

  if (userKey == 'Reset') {
    score.Wins = 0;
    score.Losses = 0;
    score.Tie = 0;
    localStorage.removeItem('score')
    document.querySelector(".score-cls-js").innerHTML =
      `<p> Wins : ${score.Wins} Losses: ${score.Losses} Tie:${score.Tie} </p>`
    return;
  }

  else {

  let result = '';
  let computerKey = randomMove();
  if (computerKey === userKey) {
    score.Tie++;
    result = "Tie"
  }

  else if (
    (userKey === "Rock" && computerKey === "Scissors") ||
    (userKey === "Paper" && computerKey === "Rock") ||
    (userKey === "Scissors" && computerKey === "Paper")

  ) {
    score.Wins++;
    result = "You Win!"
  }
  else {
    score.Losses++;
    result = "You Lose!"
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector(".result").innerHTML = `
      <h2>  ${result} </h2>
      <p>
      You
      <img src="./images/${userKey}-emoji.png"  class = "img-cls " >
      <img src="./images/${computerKey}-emoji.png" class = "img-cls ">
      Computer
      </p>
      `

  updateScoreElement();
  function updateScoreElement() {
    document.querySelector(".score-cls-js").innerHTML = `
          <p>   Wins : ${score.Wins} Losses: ${score.Losses} Tie:${score.Tie} </p>`
  }

}

}

