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
      choices: ["now", "then", "never", "all of the above",],
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


  function askQuestions() {
console.log ("askQuestions");

var currentQuestion = questions[currentQuestionIndex];
console.log (currentQuestion);
console.log (currentQuestion.ask);


//variable to store questions layout
var quizContent = "<h2> Question " + (currentQuestionIndex +1) + "</h2><p>" + (currentQuestion.ask) + "</p>";

// quiz content
document.getElementById("start-screen").innerHTML = quizContent;



}