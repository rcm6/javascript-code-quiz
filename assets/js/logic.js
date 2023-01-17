//test print questions array to console
console.log(questions);
console.log(document.getElementById("time"));

// Add event listener to start button
document.getElementById("start").addEventListener("click", startQuiz);

function startQuiz() {
  console.log("Hello World");
  // start timer
  setTime();
  askQuestions();
}

//Variables
var secondsLeft = 35;
var score = 0;
var timerInterval = 0;

// Timer Function
function setTime() {
  //timer length variable
  //secondsLeft = 35;
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    document.getElementById("time").textContent = secondsLeft;
    if (secondsLeft === 0 || secondsLeft < 0) {
      //when time = 0 or is less than 0 end game
      clearInterval(timerInterval);
      //calls endGame Function
      endGame();
      console.log("endgame");
    }
  }, 1000);
}

//correct answer function
function correct() {
  score += 1;
  //print correct
  document.getElementById("feedback").textContent = "correct";
  var audio = new Audio('assets/sfx/correct.wav');
  audio.play();
  //ask next question
  currentQuestionIndex++;
  if (currentQuestionIndex === 5) {
    endGame();
  } else {
    askQuestions();
  }
}

//wrong answer function
function incorrect() {
  // subtract time from timer
  secondsLeft -= 7;
  //print incorrect
  document.getElementById("feedback").textContent = "incorrect";
  var audio = new Audio('assets/sfx/incorrect.wav');
  audio.play();
  //ask next question
  currentQuestionIndex++;
  if (currentQuestionIndex === 5) {
    endGame();
  } else {
    askQuestions();
  }
}

//endgame function
function endGame() {

  clearInterval(timerInterval);
  secondsLeft = 1;


  //hide questions div
  document.getElementById("questions").setAttribute("class", "hide");
  //show endscreen div
  document.getElementById("end-screen").setAttribute("class", "unhide");
  //show final score
  document.getElementById("final-score").textContent = score;
  //add setscore attribute to submit button
  document.getElementById("submit").setAttribute("onclick", "setScore()");
  
}

//function to set highscore in local storage
function setScore() {
  var initials = document.getElementById("initials").value;
  if (initials !== "") {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    var newScore = {
      score: score,
      initials: initials,
    };
    highscores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
  }
  resetQuiz()
}


//function to reset quiz
function resetQuiz (){

  //hide endscreen div
  document.getElementById("end-screen").setAttribute("class", "hide");
  //clear feedback
  document.getElementById("feedback").textContent = "";
  //hide feedback div
  document.getElementById("feedback").setAttribute("class", "hide");
  //hide start-screen div
  document.getElementById("start-screen").setAttribute("class", "start");
  

  //reset variables
  currentQuestionIndex = 0;
  secondsLeft = 35;
  score = 0;

}
