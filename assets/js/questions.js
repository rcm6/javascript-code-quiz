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
//var currentQuestion = questions[currentQuestionIndex];
var correctornot = "";

function askQuestions() {
  console.log("askQuestions");

  var currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);
  console.log(currentQuestion.ask);
  console.log(currentQuestion.choices.length);

  //variable to store questions content
  var questionsContent =
    "<h2> Question " +
    (currentQuestionIndex + 1) +
    "</h2><p>" +
    currentQuestion.ask +
    "</p>";
  var correctIncorrect = '<p id="test">' + correctornot + "</p>";

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
    questionsContent += buttonCode;
  }

  //holder for incorrect/correct
  questionsContent += correctIncorrect;

  // update questions content on screen
  document.getElementById("start-screen").innerHTML = questionsContent;
}
