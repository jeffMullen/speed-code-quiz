var timer = document.querySelector('.timer');
var startBtn = document.querySelector('.start-button');
// Variable storing the contents of HTML quiz article
var quizContent = document.querySelector('.quiz');

var secondsLeft = 75;

console.log(timer);
console.log(startBtn);
console.log(quizContent);

startBtn.addEventListener('click', function () {
    startQuiz();
})

function startQuiz() {
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
