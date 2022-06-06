// timer and hiscore
var time = document.querySelector(".timer-countdown");
var score = document.querySelector(".highscore");
var secondsLeft = 5;

// button to start game
const start = document.querySelector(".play-btn");

// remove start screen
const codersIntro = document.querySelector(".start-section");
//home screen
function homeScreen() {
  codersIntro.style.display = "flex";
  gameScreen.style.display = "none";
  finalScreen.style.display = "none";
  highscoreScreen.style.display = "none";
}
// start game screen
const gameScreen = document.querySelector(".game-section");
function startQuiz() {
  codersIntro.style.display = "none";
  gameScreen.style.display = "flex";
  secondsLeft = 5;

  setTime();
}
// CALL OUT THE ANSWER CLASS BUTTON ASSHOLE
const ansBtn = document.querySelectorAll("button.answer-btn");
// VAR ANSER CALL
const ans1Btn = document.querySelector("#answer-1");
const ans2Btn = document.querySelector("#answer-2");
const ans3Btn = document.querySelector("#answer-3");
const ans4Btn = document.querySelector("#answer-4");

//array of questions
// ARRAY OF FIVE QUESTION, ZERO BASED, NUMBER CORECTLY.
const questions = [
  {
    question: "Commonly used data types DO Not include:",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "2",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within _______.",
    answers: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    correctAnswer: "1",
  },
  {
    question: "Arrays in Javascript can be used to store ______.",
    answers: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correctAnswer: "3",
  },
  {
    question:
      "String values must be enclosed within ________ when being assigned to variables.",
    answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correctAnswer: "2",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. Javascript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    correctAnswer: "3",
  },
];
// ELEMENT LOCATIONS VAR
let questionEl = document.querySelector("#question");
const correctWrong = document.querySelector("#right-wrong");
let questionCount = 0;
//answer selector
function setQuestion(id) {
  if (id < questions.length) {
    questionEl.textContent = questions[id].question;
    ans1Btn.textContent = questions[id].answers[0];
    ans2Btn.textContent = questions[id].answers[1];
    ans3Btn.textContent = questions[id].answers[2];
    ans4Btn.textContent = questions[id].answers[3];
  }
}
// QUIZ BEGIN FUNCTION

// end game highscore screen
const finalScreen = document.querySelector(".endgame-container");
const submitBtn = document.querySelector(".submit-score-btn");
function highscore() {
  finalScreen.style.display = "none";
  highscoreScreen.style.display = "flex";
}
// highscore screen
const highscoreScreen = document.querySelector(".highscore-container");
const playAgain = document.querySelector(".play-again-btn");
// start evnt listner
start.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", highscore);
playAgain.addEventListener("click", homeScreen);
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
