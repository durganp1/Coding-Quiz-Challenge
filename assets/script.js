
var pageContentEl = document.querySelector("#main-body");
var questionIntroEl = document.querySelector("#question-intro-section");

var introDirections = function() {
    var quizTitleEl = document.createElement("h3");
        quizTitleEl.className = "quiz-title";
        quizTitleEl.textContent = "Coding Quiz Challenge";
    var quizDirectionsEl = document.createElement("p");
        quizDirectionsEl.className = "quiz-p";
        quizDirectionsEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
        questionIntroEl.appendChild(quizTitleEl);
        questionIntroEl.appendChild(quizDirectionsEl);
    var startButtonEl = document.createElement("button");
        startButtonEl.textContent = "Click to Start";
        startButtonEl.className = "start-button";
        questionIntroEl.appendChild(startButtonEl);

    
};
introDirections();