//test print questions array to console
console.log(questions)
console.log (document.getElementById("time"))


// Add event listener to start button
document.getElementById("start").addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Hello World");
    // start timer
    setTime();
    askQuestions();
  }

//Variables
var secondsLeft = 60;
var score = 0;

// Timer Function
function setTime() {
    //timer length variable
    secondsLeft = 60;
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      document.getElementById("time").textContent = secondsLeft;
  
      if(secondsLeft === 0 || secondsLeft < 0 ) {
        //when time = 0 or is less than 0 end game
        clearInterval(timerInterval);
        //calls endGame Function
        //endgame();
        console.log("endgame");

      }
  
    }, 1000);
  }

//correct answer function
function correct() {
    score += 15;
    //ask next question
    currentQuestionIndex++;
    askQuestions();
  }
  
  //wrong answer function
  function incorrect() {
    secondsLeft -= 10;
    //ask next question
    currentQuestionIndex++;
    askQuestions();
  }

//endgame function


/*



Psuedocode 

Variables
---

score = 0; - this can be in the scores function 
timer = 30 - this can be in the timer function 
penality = 10; - this can be in the timer function 

questionsArr  - this is stored within the questions.js file  


2. logic file:  

    functions 
    --- 

    1. lets first import the questions file. The questions file should use "export" on the array objects itself.

            export const questionArr = [ {}, {}, {}... ]

            we then need to import this file in to our logic.js file using "import"

            import questions from 'path to the question file'


    2. lets query select all the elements we need in our functions
       
       - we will need to query select the following elements 

           1. the start quiz button 
           2. the timer div element on the page - we will later either use Element.children or Node.childNodes to get the span element specifically to change the text value of the timer
           3. get the div container with the id of "start-screen"
           4. get the div container with the id of "questions"
           5. get the div container with the id of "end-screen"
           6. get the div container with the id of "feedback"

    
    3. game start function: 
    
         - Add an event listener to the start button - DONE
            
            - Game will start with a question and timer will start - this means to invoke the timer function and the renderQuestions function
            
            - Function should keep track of the questions - if all questions completed function should render to page their score and render html elements to save their initials and their final score.
            
            - we can not use random questions function because - we need to keep track of questions already completed 

            - we need a method of keeping a track of the questions - this is why added another property to the questions array object named "answered". 

            - we will loop through the array of objects - and at each iteration we will invoke the renderQuestions function: we will pass as function arguments the choices array. 
            
            - if the user has answered  - invoke the checkCorrect function and change the objects "answered" property to true. 

            - the next iteration of a question should be based on the object "answered" property value being true - this means if the question has been answered move to the next object in the array and invoke the renderQuestions function and pass in choices array to the function. 

            - this iteration is until the end of the array of objects has been reached: at which point the "end-screen" should be displayed - which should show the score and allow the user to save their initials. 
            
                - these initials and the score should be saved to localStorage

            - when the questions are rendered to the page - we need to confirm what question has been clicked on by the user and based on the answer - invoke the checkCorrect function. 

                - we also need to render correct or incorrect text to the "feedback" element on the page - this can be either done within this function by returning a result from the checkCorrect function or invoking the checkCorrect function, get access to the object property and determine the "feedback" elements value based on the properties value          
    
    4  add a timer function
    
        - timer will decrement by seconds - remember that we can user the setInterval() method to keep track of the time
        
        - when an incorrect answer is submitted the timer will substract by an penalty amount e.g 10 seconds
    
        - this means then: the timer function should have one argument being passed to it - we can call it "incorrect" and its value will come from passing in the objects correct property

        - if the timer reaches zero: the renderEnd function should be invoked 


    5. add a renderQuestions function 

        - this function should take in an argument to function - we can call "questionChoices". 
        
        - "questionChoices" is an array of choices - we need to loop through this array and dynamically create the choices elements on the page and these should be added to the div element "choices" in the html

        - this function should get the variable we query selected the "start-screen" and apply the hide class in css file on to this element. This means we need to change the class attribute to hide. 

        - likewise we need to get the variable we query selected the "questions" and remove the class attribute of hide on to this element. 


    6. add a renderEnd function 

        - this function should make disappear the "questions" div container element from the page and render the "end-screen" div element instead. 
        

    7. check correct answer function 
        
         - when user gets the answer correct, mutate the object property correct to true and invoke the score function 

         - when user gets the answer incorrect, mutate the object property correct to false and invoke the score function 
        

    8. score function:  

        - check if the object "correct" property is true, if true update the score variable by 1 
        - check if the object "correct" property is false, if false update the score variable by -1 

*/