var timer = document.querySelector('.timer');
var startBtn = document.querySelector('.start-button');
var questOne = document.querySelector('.one');
var questTwo = document.querySelector('.two');
var questThree = document.querySelector('.three');
var judgement = document.querySelector('.judgement');
var correct = document.querySelector('.correct');

var questionsArr = [questOne, questTwo, questThree];

// Variable storing the contents of HTML quiz article
var quizWelcome = document.querySelector('.quiz-welcome');

// Timer start amount
var secondsLeft = 75;
var timerInterval

console.log(questionsArr);
console.log(timer);
console.log(startBtn);
console.log(quizWelcome);

startBtn.addEventListener('click', function () {
    startQuiz();
})

var placeholderIndex = 0;

function startQuiz() {
    quizWelcome.setAttribute('style', 'display: none');
    askQuestion();

    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            endQuiz();
        }
    }, 1000);
}

function askQuestion() {
    var visibility = questionsArr[placeholderIndex].getAttribute('data-visibility');

    if (visibility === 'hidden') {
        questionsArr[placeholderIndex].setAttribute('style', 'display: block');
    }

    checkAnswer();
}

function checkAnswer() {
    var btns = document.querySelectorAll('button');
    console.log(btns.length);
    console.log('checkAnswer');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            console.log(this);
            console.log(this.getAttribute('class'));
            if (this.getAttribute('class') === 'correct') {

            } else {
                secondsLeft -= 5;
            }
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
