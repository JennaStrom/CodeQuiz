const highScore = document.getElementById("high-score");
const timer = document.getElementById("timer");
const start = document.getElementById("start-button")
const introPage = document.getElementById("intro-page");
const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const answerOptions = document.getElementById("answer-options");
const answerButtons = Array.from(document.querySelectorAll('.option'));
console.log(answerButtons);
const resultsPage = document.getElementById("results-page");
const highScorePage = document.getElementById("high-score-page");
const submitButton = document.getElementById("submit-initials");
const finalScore = document.getElementById("final-score");
const highScoreList =document.getElementById("high-score-list");

var initialsHere = document.querySelector("#initials-here");
var count = 0;
var userScore = 0;
var theTime = 30;
var correctAnswer = "";
let intervalId = "";
let questions = [
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        choices: ["document.write()", "console.log()", "window.alert()", "All of the Above"],
        correctAnswer: "All of the Above"
    }, {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        choices: ["getElementByID()", "getElementByClass()", "A and B", "None of the Above"],
        correctAnswer: "A and B"
    }, {
        question: "Javascript is a(n)__________ language?",
        choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the Above"],
        correctAnswer: "Object-Oriented"
    }, {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        correctAnswer: "const"
    }, {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["convert()", "parse()", "Stringify()", "None of the Above"],
        correctAnswer: "Stringify()"
    }
];

function showNextQuestion() {
    if (count >= questions.length) {
        questionContainer.classList.add('hide');
        resultsPage.classList.remove('hide');
        clearInterval(intervalId);
        timer.textContent = 'Game Over!';
        // runSomeFunction();
        // return!
        return;
    }

    question.textContent = questions[count]['question'];
    // using my answerButtons array, loop through the array, and assign the textContent property to be the value of the corresponding position in your question's choices property array
    for (let i = 0; i < answerButtons.length; i++) {
        let btn = answerButtons[i];
        console.log(btn);
        btn.textContent = questions[count]['choices'][i];
    }
}

function beginTheTime() {
    intervalId = setInterval(function () {
        timer.textContent = `${theTime} seconds remaining`;
        theTime--;
        if (theTime <= 0) {
            clearInterval(intervalId);
            timer.textContent = 'Times up!';
            questionContainer.classList.add('hide');
            resultsPage.classList.remove('hide');
        }
    }, 1000)
}

function startQuiz() {
    // immediately add the hide class to your intro-page div
    introPage.classList.add('hide');
    // and then show the question container
    questionContainer.classList.remove('hide');
    //begin the timer
    beginTheTime();
    // show first question
    showNextQuestion();

}

function checkUserSelection(e) {
    console.log('event is', e);
    const target = e.target;
    if (target.textContent === questions[count].correctAnswer) {
        //user selected correctly, now what do you want to have happen?
        // add to the user score since they selected right
        userScore = userScore + 5;
        localStorage.setItem("user-score", userScore);
    } else {
        theTime = theTime - 10;
        // subtract from the time
    }
    count++;
    showNextQuestion();
}
//what happens when you click submit on your score
function storeInitials() {
    resultsPage.classList.add('hide');
    highScorePage.classList.remove('hide');
    localStorage.setItem("initials", initialsHere)
    //var li = document.createElement("li");
    //li.textContent = (initialsHere + userScore)
    //li.setAttribute = ("high-score-list")
    var initialsHere = localStorage.getItem("initials")
    highScoreList.textContent = initialsHere;
}


// start quiz event listener
start.addEventListener("click", startQuiz)
// add an event listener to answerOptions
answerOptions.addEventListener('click', checkUserSelection)
// add an event listener to submit-initials
submitButton.addEventListener('click', storeInitials)