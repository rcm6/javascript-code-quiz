//array for questions and answers
var questions = [
    {
      question: "what:",
      choices: ["steak", "pizza", "chips", "cake"],
      answer: "cake",
    },
    {
      question: "why",
      choices: ["because", "why not", "well", "shrug"],
      answer: "because",
    },
    {
      question: "when",
      choices: ["now", "then", "never", "all of the above",],
      answer: "all of the above",
    },
    {
      question: "where",
      choices: ["home", "away", "left", "right"],
      answer: "right",
    },
    {
      question: "who",
      choices: ["me", "you", "they", "it"],
      answer: "they",
    },
  ];

  var currentQuestionIndex = 0;


  function askQuestions() {
console.log ("askQuestions")

var currentQuestion = questions[currentQuestionIndex];
console.log (currentQuestion);



}