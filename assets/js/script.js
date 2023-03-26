const highScore = document.getElementById("high-score");
const timer = document.getElementById("timer");
const start = document.getElementById("start-button")
const introPage = document.getElementById("intro-page");
const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const answerOptions = document.getElementById("answer-options");
const answerButtons = Array.from(document.querySelectorAll('.option'));
console.log(answerButtons);

var count = 0;
var userScore = 0;
var theTime = 60;
var correctAnswer = "";

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
    if(count >= questions.length) {
        // show some other page, hide some stuff, do something
        // runSomeFunction();
        // return!
    }

    question.textContent = questions[count]["question"];
    // using my answerButtons array, loop through the array, and assign the textContent property to be the value of the corresponding position in your question's choices property array
    for(let i = 0; i < answerButtons.length; i++) {
        let btn = answerButtons[i];
        console.log(btn);
        btn.textContent = questions[count]['choices'][i];
    }
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

function beginTheTime() {
    const intervalId = setInterval(function() {
        timer.textContent = `${theTime} seconds left in the quiz`;
        theTime--;
        if(theTime <= 0) {
            clearInterval(intervalId);
            timer.textContent = 'Times up!';
        }
    }, 1000)
}

function checkUserSelection(e) {
    console.log('event is', e);
    const target = e.target;
    if(target.textContent === questions[count][correctAnswer]) {
        //user selected correctly, now what do you want to have happen?
        // add to the user score since they selected right
        userScore = userScore + 5;
    } else {
        // subtract from the time
        // do this part later
    }
    count++;
    showNextQuestion();
}

// add an event listener to answerOptions
answerOptions.addEventListener('click', checkUserSelection)
// start quiz event listener
start.addEventListener("click", startQuiz)

