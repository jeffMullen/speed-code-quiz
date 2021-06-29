var timer = document.querySelector('.timer');
var startBtn = document.querySelector('.start-button');
// || Question variables
var questOne = document.querySelector('.one');
var questTwo = document.querySelector('.two');
var questThree = document.querySelector('.three');
var questFour = document.querySelector('.four');
var questFive = document.querySelector('.five');
var judgement = document.querySelector('.judgement');

// || Buttons with class of correct
var correct = document.querySelector('.correct');

var questionsArr = [questOne, questTwo, questThree, questFour, questFive];

// || Variable storing the contents of HTML quiz article
var quizWelcome = document.querySelector('.quiz-welcome');

// || Score
var score = 0;

// || Timer start amount
var secondsLeft = 75;
var timerInterval;

console.log(questionsArr);
console.log(timer);
console.log(startBtn);
console.log(quizWelcome);

// || Click button to start the quiz
startBtn.addEventListener('click', function () {
    startQuiz();
})

// || Variable storing the index of questionsArr
var placeholderIndex = 0;

function startQuiz() {
    quizWelcome.setAttribute('style', 'display: none');
    prepareAnswer();
    askQuestion();

    // || Timer for quiz
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            endQuiz();
        }
    }, 1000);
}

// || Checks for questions visibility and displays it on page
function askQuestion() {
    if (placeholderIndex === questionsArr.length) {
        endQuiz();
    } else if (questionsArr[placeholderIndex].getAttribute('data-visibility') === 'hidden') {
        questionsArr[placeholderIndex].setAttribute('style', 'display: block');
    }
}

// || Check buttons for class= "correct" to determine outcome
function prepareAnswer() {
    var btns = document.querySelectorAll('button');
    console.log(btns);
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            console.log(this);
            console.log(this.getAttribute('class'));
            console.log(this.textContent);
            if (this.getAttribute('class') === 'correct') {
                score++;
                console.log(score);
            } else {
                secondsLeft -= 5;
            }
            // || Clears the current question and adds one to the placeholder index
            questionsArr[placeholderIndex].setAttribute('style', 'display: none');
            placeholderIndex++;
            askQuestion();
        })
    }
}

function endQuiz() {
    clearInterval(timerInterval);
}

function highScores() {

}

// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score
