//array for questions and answers
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question: "The condition in an if / else statement is enclosed within ____",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ____",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

//set variables
var currentQuestionIndex = 0;

//function to ask questions
function askQuestions() {
  var currentQuestion = questions[currentQuestionIndex];

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
  //write question
  document.getElementById("question-title").textContent =
    currentQuestion.question;
  //write button code
  document.getElementById("choices").innerHTML = buttonquestions;
  console.log("score: " + score);
}