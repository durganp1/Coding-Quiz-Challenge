
var pageContentEl = document.querySelector("#main-body");
var questionIntroEl = document.querySelector("#question-intro-section");
var introWrapperEl = document.querySelector("#intro-wrapper");
var questionWrapperEl = document.querySelector("#question-rotation-wrapper");
var answerOptionOneEl = document.querySelector("#answer-option-one");
var answerOptionTwoEl = document.querySelector("#answer-option-two");
var answerOptionThreeEl = document.querySelector("#answer-option-three");
var answerOptionFourEl = document.querySelector("#answer-option-four");
var answerBoxEl = document.querySelector("#answer-box");
var timerEl = document.getElementById("countdown");
var highScoreEl = document.getElementById("high-score-container");
var answerTextEl = "";
var currentQuestionIndex = 0;
var currentScore = 0;

var questionArray = [
    "What is a Method?",
    "What does DOM stand for?",
    "What does querySelector do?",
    "What do you use to tell if something has been 'clicked' on the screen?",
    "How do you make a directory from the command line?",
    "How do you find out how many items are in an Array?",
    "What does 'Math.random' do?",
    "What does '!' stand for?",
    "What do you call the code between the '{}' ?",
    "What is x called in the following 'function(x)' ?"
];

var answerArray = [
    {optionOne: "A function that belongs to a certain object",
    optionTwo: "The same as a parameter",
    optionThree: "A type of fungus",
    optionFour: "Color of the Sun"
    },
    {optionOne: "Document Object Model",
    optionTwo: "Do Over Manytimes",
    optionThree: "Did Object Move",
    optionFour: "Don't Over Modify"
    },
    {optionOne: "Attaches an object to an email",
    optionTwo: "Finds you local quarry",
    optionThree: "Selects a DOM",
    optionFour: "Colors the sky blue"
    },
    {optionOne: "addEventListner",
    optionTwo: "< select >",
    optionThree: "< hear >",
    optionFour: "listner"
    },
    {optionOne: "mkdir",
    optionTwo: "pushdir",
    optionThree: "pulldir",
    optionFour: "create.directory"
    },
    {optionOne: "array.length",
    optionTwo: "array.size",
    optionThree: "size.array",
    optionFour: "length.array"
    },
    {optionOne: "gives you a random number between 0 - 1, but not 1",
    optionTwo: "gives you a random number from 1 - 100",
    optionThree: "gives you a random number that is negative",
    optionFour: "gives you a winning lottery ticket"
    },
    {optionOne: "It is known as the NOT operator",
    optionTwo: "That you are very angry at your code",
    optionThree: "Your code is swearing at you",
    optionFour: "You have given up on coding!"
    },
    {optionOne: "Code Block",
    optionTwo: "Happy Code",
    optionThree: "Advanced Code",
    optionFour: "Top Secret"
    },
    {optionOne: "A parameter",
    optionTwo: "A variable",
    optionThree: "An expression",
    optionFour: "An object"
    }];

var introWrapper = function() {
    var quizTitleEl = document.createElement("div");
        quizTitleEl.className = "intro-wrapper";
    var quizIntroTitleEl = document.createElement("h2");
        quizIntroTitleEl.className = "question-rotation-wrapper";
        quizIntroTitleEl.textContent = "Code Quiz Challenge";
    var quizDirectionsEl = document.createElement("p");
        quizDirectionsEl.className = "intro-instructions";
        quizDirectionsEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
        quizIntroTitleEl.appendChild(quizDirectionsEl);
        introWrapperEl.appendChild(quizIntroTitleEl);
    var startButtonEl = document.createElement("button");
        startButtonEl.textContent = "Click to Start";
        startButtonEl.className = "start-button";
        introWrapperEl.appendChild(startButtonEl);        
};

var finalHighScoreEl = function() {
    highScoreEl.textContent = "High Score is ";
};

var countdownEl = function() {
    currentScore = 90;
    var timeInterval = setInterval(function() {
          timerEl.textContent = "score " + currentScore;
          currentScore--;
      }, 1000);
};

var questionRotateEl = function() {
    var questionEl = document.createElement("div");
        questionEl.className = "question-rotation-wrapper";
        questionEl.innerHTML = "<h2 class = 'question-style'>" + questionArray[currentQuestionIndex] + "</h2>";
        questionWrapperEl.appendChild(questionEl);
};

var answerRotateEl = function(event) {
    var retrieveOptionsArray = [answerArray[currentQuestionIndex].optionOne, answerArray[currentQuestionIndex].optionTwo, answerArray[currentQuestionIndex].optionThree, answerArray[currentQuestionIndex].optionFour];
    // randomize rertriveOptionsArry
    var shuffle = function(retrieveOptionsArray) {
        var counter = retrieveOptionsArray.length, temp, index;
            while (counter > 0) {
                index = Math.floor(Math.random() * counter);
                counter--;
                temp = retrieveOptionsArray[counter];
                retrieveOptionsArray[counter] = retrieveOptionsArray[index];
                retrieveOptionsArray[index] = temp;
            };
            return retrieveOptionsArray;
    };
    var shuffledOptions = shuffle(retrieveOptionsArray);
    var answerOneEl = document.createElement("li");
        answerOneEl.className = "answer-style";
        answerOneEl.innerHTML = "<h5 class = 'answer-style'>" +  shuffledOptions[0] + "</h5>"
        answerOptionOneEl.appendChild(answerOneEl);
    var answerTwoEl = document.createElement("li");
        answerTwoEl.className = "answer-style";
        answerTwoEl.innerHTML = "<h5 class = 'answer-style'>" + shuffledOptions[1] + "</h5>"
        answerOptionTwoEl.appendChild(answerTwoEl);
    var answerThreeEl = document.createElement("li");
        answerThreeEl.className = "answer-style";
        answerThreeEl.innerHTML = "<h5 class = 'answer-style'>" + shuffledOptions[2] + "</h5>"
        answerOptionThreeEl.appendChild(answerThreeEl);
    var answerFourEl = document.createElement("li");
        answerFourEl.className = "answer-style";
        answerFourEl.innerHTML = "<h5 class = 'answer-style'>" + shuffledOptions[3] + "</h5>"
        answerOptionFourEl.appendChild(answerFourEl);
        console.log(shuffledOptions);
};

var clearCurrent = function()  {
    //clear everything first
        questionWrapperEl.innerHTML = '';
        answerOptionOneEl.innerHTML = '';
        answerOptionTwoEl.innerHTML = '';
        answerOptionThreeEl.innerHTML = '';
        answerOptionFourEl.innerHTML = '';
};

var rightWrongEl = function() {
document.querySelectorAll('.answer-rotation-wrapper').forEach(item => {
    item.addEventListener('click', event => {
       
    //Check the value of the li text
    var selectedAnswer = item.firstElementChild.firstElementChild.textContent;
        // compare it to optionOne
        console.log(selectedAnswer);
        console.log(answerArray[currentQuestionIndex].optionOne);


        if (selectedAnswer === answerArray[currentQuestionIndex].optionOne) {
            answerTextEl = "Correct!";
        }
        else {
            answerTextEl = "Wrong!";
            currentScore -= 10;
        };
        
        currentQuestionIndex++;
        console.log(currentQuestionIndex);
        debugger;
        clearCurrent();
        questionAnswerHandlerEl();
    })
    })
    };
  


var questionAnswerHandlerEl = function(event) {

        if ( currentQuestionIndex < questionArray.length ) { 
            questionRotateEl();
            answerRotateEl();  
        }
        else {
            gameOverEl();
        };
        rightWrongEl();
};

introWrapperEl.addEventListener("click", () => {
    questionAnswerHandlerEl();
    countdownEl();
});

introWrapper();
finalHighScoreEl();

var gameOverEl = function() {
    var gameOverWrapperEl = document.createElement("div");
        gameOverWrapperEl.className = "intro-wrapper";
    var gameOverHeaderEl = document.createElement("h2");
        gameOverHeaderEl.className = "question-rotation-wrapper";
        gameOverHeaderEl.textContent = "All Done!";
    var gameOverScoreEl = document.createElement("p");
        gameOverScoreEl.className = "intro-instructions";
        gameOverScoreEl.textContent = "Your Final Score is " + currentScore;
        gameOverHeaderEl.appendChild(gameOverScoreEl);
        gameOverWrapperEl.appendChild(gameOverHeaderEl);
    var enterInitialsWrapperEl = document.createElement("div");
        enterInitialsWrapperEl.className = "intro-wrapper";
    var enterInitialsTextEl = document.createElement("p");
        enterInitialsTextEl.className = "intro-instructions";
        enterInitialsTextEl.textContent = "Please Enter Your Initials ";
        enterInitialsWrapperEl.appendChild(enterInitialsTextEl)
    var inputInitialsEl = document.getElementById("input-box");
        inputInitialsEl.textContent = "Initials";
        inputInitialsEl.className = "input-box";
        enterInitialsWrapperEl.appendChild(inputInitialsEl);     
};

// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }
// var loadTasks = function() {
// var savedTasks = localStorage.getItem("tasks");
//     if (!savedTasks) {
//         return false;
//     }
//     savedTasks = JSON.parse(savedTasks);
//     console.log("Saved Tasks from loading")
//     console.log(savedTasks);
//     for (var i = 0; i < savedTasks.length; i++) {
//         createTaskEl(savedTasks[i]);
//     }
// };
