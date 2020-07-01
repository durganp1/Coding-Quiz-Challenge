
var headerWrapperEl = document.querySelector("#header-wrapper");
var gameOverWrapperEl = document.querySelector("#answer-box");
var introWrapperEl = document.querySelector("#intro-wrapper");
var questionWrapperEl = document.querySelector("#question-rotation-wrapper");
var answerOptionOneEl = document.querySelector("#answer-option-one");
var answerOptionTwoEl = document.querySelector("#answer-option-two");
var answerOptionThreeEl = document.querySelector("#answer-option-three");
var answerOptionFourEl = document.querySelector("#answer-option-four");
var answerBoxEl = document.querySelector("#answer-box");
var answerBoxTextEl = "";
var timerEl;
var answerTextEl = "";
var currentQuestionIndex = 0;
var currentScoreEl = 90;
var timeInterval;
var inputInitialsEl;
var gameOverScoreEl;
var scoresObj = JSON.parse(localStorage.getItem("scoresObj")) || [];

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

var headerWrapper = function() {
    var highScoreEl = document.createElement("h2");
        highScoreEl.className = "header-container";
        highScoreEl.textContent = "High Score ";
    var titleEl = document.createElement("h2");
        titleEl.className = "header-h2";
        titleEl.textContent = "Code Quiz Challenge";
        headerWrapperEl.appendChild(highScoreEl);
        headerWrapperEl.appendChild(titleEl);
};

var countdownEl = function () {
        timerEl = document.createElement("h2");
        timerEl.className = "header-container";
        timeInterval = setInterval(function() {
        timerEl.textContent = "Score " + currentScoreEl;
        currentScoreEl--;
    }, 1000);  
    headerWrapperEl.appendChild(timerEl);
};


var introWrapper = function() {
    gameOverWrapperEl.innerHTML = "";
        answerBoxEl.innerHTML = "";        
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

introWrapperEl.addEventListener("click", () => {
    introWrapperEl.innerHTML = "";
    headerWrapper();
    countdownEl();
    questionAnswerHandlerEl();
});

var questionRotateEl = function() {
    var questionEl = document.createElement("div");
        questionEl.className = "question-rotation-wrapper";
        questionEl.innerHTML = "<h2 class = 'question-style'>" + questionArray[currentQuestionIndex] + "</h2>";
        questionWrapperEl.appendChild(questionEl);
};

var answerRotateEl = function(event) {
    var retrieveOptionsArray = [answerArray[currentQuestionIndex].optionOne, answerArray[currentQuestionIndex].optionTwo, answerArray[currentQuestionIndex].optionThree, answerArray[currentQuestionIndex].optionFour];
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
        questionWrapperEl.innerHTML = '';
        answerOptionOneEl.innerHTML = '';
        answerOptionTwoEl.innerHTML = '';
        answerOptionThreeEl.innerHTML = '';
        answerOptionFourEl.innerHTML = '';
        introWrapperEl.innerHTML = "";
        gameOverWrapperEl.innerHTML = "";
        answerBoxEl.innerHTML = "";
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



var gameOverEl = function(scoreDataObj) {
        clearTimeout(timeInterval);
        headerWrapperEl.innerHTML = "";
    var gameOverEl = document.createElement("div");
        gameOverEl.className = "intro-wrapper";
    var gameOverHeaderEl = document.createElement("h2");
        gameOverHeaderEl.className = "answer-block-top";
        gameOverHeaderEl.textContent = "All Done!";
    var gameOverScoreEl = document.createElement("p");
        gameOverScoreEl.className = "intro-instructions";
        gameOverScoreEl.textContent = "Your Final Score is " + (currentScoreEl + 1);
        gameOverHeaderEl.appendChild(gameOverScoreEl);
        gameOverWrapperEl.appendChild(gameOverHeaderEl);
    var enterInitialsEl = document.createElement("div");
        enterInitialsEl.className = "intro-wrapper";
    var enterInitialsTextEl = document.createElement("p");
        enterInitialsTextEl.className = "intro-instructions";
        enterInitialsTextEl.textContent = "Please Enter Your Initials ";
        inputInitialsEl = document.createElement("INPUT");
        inputInitialsEl.setAttribute("type", "text");
        inputInitialsEl.setAttribute("value", "");
        enterInitialsTextEl.appendChild(inputInitialsEl);
        answerBoxEl.appendChild(enterInitialsTextEl);
    var inputInitialsButtonEl = document.createElement("button");
        inputInitialsButtonEl.textContent = "Submit";
        inputInitialsButtonEl.className = "start-button";
        answerBoxEl.appendChild(inputInitialsButtonEl);
        inputInitialsButtonEl.addEventListener("click", () => {
    var scoreDataObj = {
        name: inputInitialsEl.value,
        score: currentScoreEl + 1
        } 
        answerBoxTextEl.textContent = "";
        enterInitialsTextEl.innerHTML = "";
        inputInitialsButtonEl.innerHTML = "";
        clearInterval(timeInterval);
        scoresObj.push(scoreDataObj);
        saveScores();
        endGameHighScoresEl();
        });     
};

var endGameHighScoresEl = function() {
        clearCurrent();
        finalHighScoreEl();
};

var saveScores = function () {
        localStorage.setItem("scoresObj", JSON.stringify(scoresObj));   
}

var loadScores = function () {
    var savedScores = localStorage.getItem("scoresObj");
        if (!savedScores) {
            return false;
        }
        savedScores = JSON.parse(savedScores);
}

var finalHighScoreEl = function() {
    var endGameEl = document.createElement("div");
        endGameEl.className = "intro-wrapper";
    var endGameHeaderEl = document.createElement("h2");
        endGameHeaderEl.className = "answer-block-top";
        endGameHeaderEl.textContent = "High Scores";
        gameOverWrapperEl.appendChild(endGameHeaderEl);

        scoresObj.sort(function(a, b) {
            return b.score - a.score;
        });
        scoresObj.forEach(function(score) {
    var listScore = document.createElement("li");
        listScore.textContent = score.name + "\xa0\xa0\xa0\xa0\xa0" + score.score;
        listScore.className = "intro-instructions";
        gameOverWrapperEl.appendChild(listScore);
        });
    var newGameButtonEl = document.createElement("button");
        newGameButtonEl.textContent = "New Game";
        newGameButtonEl.id = ("new-game-button");
        newGameButtonEl.className = "new-clear-button";
        gameOverWrapperEl.appendChild(newGameButtonEl);
        
    var clearAllButton = document.createElement("button");
        clearAllButton.textContent = "Clear All Scores";
        clearAllButton.className = "new-clear-button";
        gameOverWrapperEl.appendChild(clearAllButton);
        
        //document.getElementById("new-game-button").addEventListener("click", restartGame());   

};

var restartGame = function() {
    clearCurrent();
    currentQuestionIndex = 0;
    introWrapper();
};




//document.getElementById("Clear All Scores").addEventListener("click", localStorage.clear());  

introWrapper();
loadScores();

