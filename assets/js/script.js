var timer = document.querySelector('.timer');
var startBtn = document.querySelector('.start-button');
var questOne = document.querySelector('.one');
var questTwo = document.querySelector('.two');
var questThree = document.querySelector('.three');
var questionsArr = [questOne, questTwo, questThree];

// Variable storing the contents of HTML quiz article
var quizWelcome = document.querySelector('.quiz-welcome');

// Timer start amount
var secondsLeft = 75;


console.log(questionsArr);
console.log(timer);
console.log(startBtn);
console.log(quizWelcome);

startBtn.addEventListener('click', function () {
    startQuiz();
})

function startQuiz() {
    quizWelcome.setAttribute('style', 'display: none');

    for (var i = 0; i < questionsArr.length; i++) {
        var visibility = questionsArr[i].getAttribute('data-visibility');
        if (visibility === 'hidden') {
            questionsArr[i].setAttribute('style', 'display: block');

        }
    }


    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);


}

function endQuiz() {

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
