// timer and hiscore
var time = document.querySelector(".timer-countdown");
var score = document.querySelector(".highscore");
var secondsLeft = 30;

// button to start game
const start = document.querySelector(".play-btn");

// remove start screen
const codersIntro = document.querySelector(".start-section");

// start game screen
const gameScreen = document.querySelector(".game-section");
function startQuiz() {
  codersIntro.style.display = "none";
  gameScreen.style.display = "flex";

  setTime();
}
// end game highscore screen
const finalScreen = document.querySelector(".endgame-container");
// start evnt listner
start.addEventListener("click", startQuiz);

// timer function

function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = `Time:${secondsLeft}s`;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      finalScreen.style.display = "flex";
      gameScreen.style.display = "none";
    }
  }, 1000);
}
