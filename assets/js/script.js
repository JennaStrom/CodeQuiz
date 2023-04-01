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
const highScoreList = document.getElementById("high-score-list");
const goBack = document.getElementById("go-back");
const clear = document.getElementById("clear");
const viewHighScore = document.getElementById("view-high-score");

var count = 0;
var userScore = 0;
var theTime = 45;
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
        finalScore.textContent = "Your final score is " + userScore;
    console.log("final score function " + userScore)
        return;
    }

    question.textContent = questions[count]['question'];
    // using my answerButtons array, loop through the array, and assign the textContent property to be the value of the corresponding position in the question's choices property array
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
    // immediately add the hide class to intro-page div
    introPage.classList.add('hide');
    // and then show the question container
    questionContainer.classList.remove('hide');
    //begin the timer
    beginTheTime();
    // show first question
    showNextQuestion();

}
//Did they get the question correct?
function checkUserSelection(e) {
    //console.log('event is', e);
    const target = e.target;
    if (target.textContent === questions[count].correctAnswer) {
        userScore = userScore + 5;
        console.log(userScore);
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
    var initialsHere = document.getElementById("initials-here").value;
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    var newScore = { score: userScore, initials: initialsHere }
    highScores.push(newScore);
    window.localStorage.setItem("highScores", JSON.stringify(highScores));
    resultsPage.classList.add('hide');
    
    generateHighScores();
}

function generateHighScores() {
    highScorePage.classList.remove('hide');
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    highScores.sort(function (a, b) {
        return b.score - a.score
    })
    for (var i = 0; i < highScores.length; i++) {
        var li = document.createElement("li")
        li.textContent = highScores[i].initials + ": " + highScores[i].score
        highScoreList.append(li)
    }
}
function highScoreGoBack() {
    location.reload()
}
function highScoreClear() {
    window.localStorage.removeItem("highScores")
    highScoreList.textContent = ""
}

function viewHighScoreFunction() {
    introPage.classList.add('hide');
    //double check for repeats
    generateHighScores();
}


// start quiz event listener
start.addEventListener("click", startQuiz)
// add an event listener to answerOptions
answerOptions.addEventListener('click', checkUserSelection)
// add an event listener to submit-initials
submitButton.addEventListener('click', storeInitials)
goBack.addEventListener('click', highScoreGoBack)
clear.addEventListener("click", highScoreClear)
viewHighScore.addEventListener("click", viewHighScoreFunction)