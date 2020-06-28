
var pageContentEl = document.querySelector("#main-body");
var questionIntroEl = document.querySelector("#question-intro-section");
var introWrapperEl = document.querySelector("#intro-wrapper");
var questionWrapperEl = document.querySelector("#question-rotation-wrapper");
var answerOptionOneEl = document.querySelector("#answer-option-one");
var answerOptionTwoEl = document.querySelector("#answer-option-two");
var answerOptionThreeEl = document.querySelector("#answer-option-three");
var answerOptionFourEl = document.querySelector("#answer-option-four");


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
]




var answerArray = [{
    optionOne: "The same as a parameter",
    optionTwo: true + "A function that belongs to a certain object",
    optionThree: "A type of fungus",
    optionFour: "Color of the Sun"
    },
    {optionOne: true + "Document Object Model",
    optionTwo: "Do Over Manytimes",
    optionThree: "Did Object Move",
    optionFour: "Don't Over Modify"
    },
    {optionOne: "Finds you local quarry",
    optionTwo: "Selects a DOM",
    optionThree: true + "Attaches an object to an email",
    optionFour: "Colors the sky blue"
    },
    {optionOne: "<select>",
    optionTwo: "<hear>",
    optionThree: "listner",
    optionFour: true + "addEventListner"
    },
    {optionOne: "pushdir",
    optionTwo: "pulldir",
    optionThree: true + "mkdir",
    optionFour: "create.directory"
    },
    {optionOne: true + "array.length",
    optionTwo: "array.size",
    optionThree: "size.array",
    optionFour: "length.array"
    },
    {optionOne: "gives you a random number from 1 - 100",
    optionTwo: "gives you a random number that is negative",
    optionThree:  true + "gives you a random number between 0 - 1, but not 1",
    optionFour: "gives you a winning lottery ticket"
    },
    {optionOne: "That you are very angry at your code",
    optionTwo: "Your code is swearing at you",
    optionThree: true + "It is known as the NOT operator",
    optionFour: "You have given up on coding!"
    },
    {optionOne: "Happy Code",
    optionTwo: "Advanced Code",
    optionThree: true + "Code Block",
    optionFour: "Top Secret"
    },
    {optionOne: "A variable",
    optionTwo: true + "A parameter",
    optionThree: "An expression",
    optionFour: "An object"
    }]









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

var questionRotateEl = function() {
    var questionEl = document.createElement("div");
        questionEl.className = "question-rotation-wrapper";
        questionEl.innerHTML = "<h2 class = 'question-style'>" + questionArray[0] + "</h2>"
        questionWrapperEl.appendChild(questionEl);
};
var answerRotateEl = function() {
    var answerOneEl = document.createElement("li");
        answerOneEl.className = "answer-style";
        answerOneEl.innerHTML = "<h5 class = 'answer-style'>" + answerArray[0].optionOne + "</h5>"
        answerOptionOneEl.appendChild(answerOneEl);
    var answerTwoEl = document.createElement("li");
        answerTwoEl.className = "answer-style";
        answerTwoEl.innerHTML = "<h5 class = 'answer-style'>" + answerArray[0].optionTwo + "</h5>"
        answerOptionTwoEl.appendChild(answerTwoEl);
    var answerThreeEl = document.createElement("li");
        answerThreeEl.className = "answer-style";
        answerThreeEl.innerHTML = "<h5 class = 'answer-style'>" + answerArray[0].optionThree + "</h5>"
        answerOptionThreeEl.appendChild(answerThreeEl);
    var answerFourEl = document.createElement("li");
        answerFourEl.className = "answer-style";
        answerFourEl.innerHTML = "<h5 class = 'answer-style'>" + answerArray[0].optionFour + "</h5>"
        answerOptionFourEl.appendChild(answerFourEl);
};









introWrapperEl.addEventListener("click", questionAnswerHandlerEl);

//answerHandlerEl();
//questionRotateEl();
introWrapper();