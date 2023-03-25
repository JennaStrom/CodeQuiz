const highScore = document.getElementById("high-score");
const timer = document.getElementById("timer");
const intorPage = document.getElementById("intro-page");
const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const answerOptions = document.getElementById("answer-options");
const choiceA = document.getElementById("a");const choiceB = document.getElementById("b");const choiceC = document.getElementById("c");const choiceD = document.getElementById("d");

let questions = [
    {
        question : "Which of the following methods can be used to display data in some form using Javascript?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Correct",
        correct : "D"
    }, {
        question : "Which of the following methods is used to access HTML elements using Javascript?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "C"
    }, {
        question : "Javascript is a(n)__________ language?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct: "A"
    }, {
        question : "How can a datatype be declared to be a constant type?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct: "A"
    }, {
        question : "Which function is used to serialize an object into a JSON string in Javascript?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong"
    }
];