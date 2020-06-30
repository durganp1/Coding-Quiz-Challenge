
var pageContentEl = document.querySelector("#main-body");
var questionIntroEl = document.querySelector("#question-intro-section");
var gameOverWrapperEl = document.querySelector("#answer-box");
var enterInitialsWrapperEl = document.querySelector("#main-body")
var introWrapperEl = document.querySelector("#intro-wrapper");
var questionWrapperEl = document.querySelector("#question-rotation-wrapper");
var answerOptionOneEl = document.querySelector("#answer-option-one");
var answerOptionTwoEl = document.querySelector("#answer-option-two");
var answerOptionThreeEl = document.querySelector("#answer-option-three");
var answerOptionFourEl = document.querySelector("#answer-option-four");
var answerBoxEl = document.querySelector("#answer-box");
var answerBoxTextEl = "";
var timerEl = document.getElementById("countdown");
var highScoreEl = document.getElementById("high-score-container");
var answerTextEl = "";
var currentQuestionIndex = 0;
var counterEl = 0;
var currentScoreEl = 90;
var timeInterval;

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

var countdownEl = function () {
        timeInterval = setInterval(function() {
        timerEl.textContent = "Score " + currentScoreEl;
    }, 1000);
        currentScoreEl--;
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
};

var clearCurrent = function()  {
    //clear everything first
        questionWrapperEl.innerHTML = '';
        answerOptionOneEl.innerHTML = '';
        answerOptionTwoEl.innerHTML = '';
        answerOptionThreeEl.innerHTML = '';
        answerOptionFourEl.innerHTML = '';
        introWrapperEl.innerHTML = "";
};

var rightWrongEl = function(event) {
    answerBoxTextEl.textContent = "";
    var selectedAnswer = event.target.textContent;
        if (selectedAnswer === answerArray[currentQuestionIndex].optionOne) {
            answerTextEl = "Correct!";
        }
        else {
            answerTextEl = "Wrong!";
            currentScoreEl -= 10;
        };
        answerBoxTextEl = document.createElement("h2");
        answerBoxTextEl.className = "question-rotation-wrapper";
        answerBoxTextEl.textContent = answerTextEl;
        answerBoxEl.appendChild(answerBoxTextEl);
        currentQuestionIndex++;
        clearCurrent();
        questionAnswerHandlerEl();
};

document.querySelectorAll(".answer-rotation-wrapper").forEach(item => {
    item.addEventListener("click", rightWrongEl)
});
  


var questionAnswerHandlerEl = function(event) {
        if ( currentQuestionIndex < questionArray.length ) { 
            questionRotateEl();
            answerRotateEl();  
        }
        else {
            gameOverEl();
        };
};

introWrapperEl.addEventListener("click", () => {
    countdownEl();
    questionAnswerHandlerEl();
});

var gameOverEl = function() {
        clearTimeout(timeInterval);
    var gameOverEl = document.createElement("div");
        gameOverEl.className = "intro-wrapper";
    var gameOverHeaderEl = document.createElement("h2");
        gameOverHeaderEl.className = "answer-block-top";
        gameOverHeaderEl.textContent = "All Done!";
    var gameOverScoreEl = document.createElement("p");
        gameOverScoreEl.className = "intro-instructions";
        gameOverScoreEl.textContent = "Your Final Score is " + currentScoreEl;
        gameOverHeaderEl.appendChild(gameOverScoreEl);
        gameOverWrapperEl.appendChild(gameOverHeaderEl);
    var enterInitialsEl = document.createElement("div");
        enterInitialsEl.className = "intro-wrapper";
    var enterInitialsTextEl = document.createElement("p");
        enterInitialsTextEl.className = "intro-instructions";
        enterInitialsTextEl.textContent = "Please Enter Your Initials ";
    var inputInitialsEl = document.createElement("INPUT");
        inputInitialsEl.setAttribute("type", "text");
        inputInitialsEl.setAttribute("value", "");
        enterInitialsTextEl.appendChild(inputInitialsEl);
        enterInitialsWrapperEl.appendChild(enterInitialsTextEl);
    var inputInitialsButtonEl = document.createElement("button");
        inputInitialsButtonEl.textContent = "Submit";
        inputInitialsButtonEl.className = "start-button";
        enterInitialsWrapperEl.appendChild(inputInitialsButtonEl); 
        inputInitialsButtonEl.addEventListener("click", () => {
            answerBoxTextEl.textContent = "";
            enterInitialsTextEl.innerHTML = "";
            inputInitialsButtonEl.innerHTML = "";
            endGameHighScoresEl();
        });        
};

var endGameHighScoresEl = function() {
    var endGameEl = document.createElement("div");
        endGameEl.className = "intro-wrapper";
    var endGameHeaderEl = document.createElement("h2");
        endGameHeaderEl.className = "answer-block-top";
        endGameHeaderEl.textContent = "High Scores";
        gameOverWrapperEl.appendChild(endGameHeaderEl);
    var endGameListEl = document.createElement("ol");
        endGameListEl.className = "intro-wrapper";
        endGameHeaderEl.appendChild(endGameListEl);
    var endGameListItemsEl = document.createElement("li");
        endGameListItemsEl.className = "intro-instructions";
        endGameListItemsEl.textContent = "test 1";
        endGameListEl.appendChild(endGameListItemsEl);
    var endGameListItemsTwoEL = document.createElement("li");
        endGameListItemsTwoEL.className = "intro-instructions";
        endGameListItemsTwoEL.textContent = "test 2";
        endGameListEl.appendChild(endGameListItemsTwoEL);
    var endGameListItemsThreeEl = document.createElement("li");
        endGameListItemsThreeEl.className = "intro-instructions";
        endGameListItemsThreeEl.textContent = "test 3"
        endGameListEl.appendChild(endGameListItemsThreeEl);
};


introWrapper();
finalHighScoreEl();
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
