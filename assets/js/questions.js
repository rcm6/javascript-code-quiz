//array for questions and answers
var questions = [
  {
    ask: "what:",
    choices: ["steak", "pizza", "chips", "cake"],
    answer: "cake",
  },
  {
    ask: "why",
    choices: ["because", "why not", "well", "shrug"],
    answer: "because",
  },
  {
    ask: "when",
    choices: ["now", "then", "never", "all of the above"],
    answer: "all of the above",
  },
  {
    ask: "where",
    choices: ["home", "away", "left", "right"],
    answer: "right",
  },
  {
    ask: "who",
    choices: ["me", "you", "they", "it"],
    answer: "they",
  },
];

var currentQuestionIndex = 0;
var currentQuestion = questions[currentQuestionIndex];
var correctornot = "";

//function to ask questions
function askQuestions() {
  console.log("askQuestions");

  var currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);
  console.log(currentQuestion.ask);
  console.log(currentQuestion.choices.length);

  //variable to store questions content
  var buttonquestions = "";
  //choices loop
  for (
    var choicesLoop = 0;
    choicesLoop < currentQuestion.choices.length;
    choicesLoop++
  ) {
    var buttonCode = '<button onclick="[answer]">[choices]</button>';
    buttonCode = buttonCode.replace(
      "[choices]",
      currentQuestion.choices[choicesLoop]
    );
    if (currentQuestion.choices[choicesLoop] == currentQuestion.answer) {
      buttonCode = buttonCode.replace("[answer]", "correct()");
    } else {
      buttonCode = buttonCode.replace("[answer]", "incorrect()");
    }
    buttonquestions += buttonCode;
  }

  // update questions content on screen
  //hide start-screen div
  document.getElementById("start-screen").setAttribute("class", "hide");
  //show questions div
  document.getElementById("questions").setAttribute("class", "unhide");
  //show feedback div
  document.getElementById("feedback").setAttribute("class", "unhide");
  //write question title and write question
  document.getElementById("question-title").textContent =
    currentQuestionIndex + 1 + currentQuestion.ask;
  //write button code
  document.getElementById("choices").innerHTML = buttonquestions;
  console.log("score: " + score);
}
