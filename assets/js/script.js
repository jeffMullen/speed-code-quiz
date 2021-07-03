var timer = document.querySelector('.timer');
var startBtn = document.querySelector('.start-button');
var quizQuest = document.querySelector('.quizQuest');

// || Question variables
var questOne = document.querySelector('.one');
var questTwo = document.querySelector('.two');
var questThree = document.querySelector('.three');
var questFour = document.querySelector('.four');
var questFive = document.querySelector('.five');
var questionsArr = [questOne, questTwo, questThree, questFour, questFive];

var judgement = document.querySelector('#judgement');

// || Score entry variables
var displayScore = document.querySelector('#display-score');
var entry = document.querySelector('#entry');
var initials = document.querySelector('#initials');
var submit = document.querySelector('#submit');

// || Highscore display elements
var highScoresEl = document.querySelector('.highscores');
var leaderBoard = document.querySelector('#leaderboard');

// || Highscores Array
var highScoresArr = [];
highScoresArr = JSON.parse(localStorage.getItem('highscores'));

// || Buttons with class of correct
var correct = document.querySelector('.correct');

// || Try quiz again button - highscores page
var restart = document.querySelector('#restart');

// || Variable storing the contents of HTML quiz article
var quizWelcome = document.querySelector('.quiz-welcome');

// || Score
var score = 0;

// || Timer start amount
var secondsLeft = 50;
var timerInterval;

// || Click button to start the quiz
startBtn.addEventListener('click', function () {
    startQuiz();
})

// || Variable storing the index of questionsArr
var placeholderIndex = 0;

// || Sets Timer and asks questions
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

    for (var i = 0; i < btns.length; i++) {
        var div = document.createElement('div');
        var p = document.createElement('p');
        btns[i].addEventListener('click', function () {

            if (this.getAttribute('class') === 'correct') {
                score++;
                p.textContent = 'Correct!';
            } else {
                secondsLeft -= 5;
                p.textContent = 'Wrong!';
            }

            if (placeholderIndex === questionsArr.length) {
                return;
            } else {
                questionsArr[placeholderIndex].appendChild(div);
                div.appendChild(p);
            }
            judgement.setAttribute('style', 'display: block');
            setTimeout(nextQuestion, 1000);
        })
    }
}

function nextQuestion() {
    judgement.setAttribute('style', 'display: none');

    if (placeholderIndex === questionsArr.length) {
        return;
    } else {
        questionsArr[placeholderIndex].setAttribute('style', 'display: none');
        placeholderIndex++;
        askQuestion();
    }

}



function endQuiz() {
    // || Question disappears if time runs out
    for (var i = 0; i < questionsArr.length; i++) {
        if (questionsArr[i].getAttribute('style') === 'display: block') {
            questionsArr[i].setAttribute('style', 'display: none');
        }
    }
    clearInterval(timerInterval);
    displayScore.textContent = ('Your score is ' + score);
    entry.setAttribute('style', 'display: flex');
    setHighScores();
}

var newLi;

function setHighScores() {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        if (highScoresArr === null) {
            newLi = document.createElement('li');
            newLi.textContent = (initials.value.toUpperCase() + ' - ' + score);

            // || Add score to array that will be stored in local storage
            highScoresArr = [newLi.textContent];
            localStorage.setItem('highscores', JSON.stringify(highScoresArr))

            // || Clear initials input element
            entry.setAttribute('style', 'display: none');
            leaderBoard.appendChild(newLi);
            highScoresEl.setAttribute('style', 'display: block');
        }
        else {
            newLi = document.createElement('li');
            newLi.textContent = (initials.value.toUpperCase() + ' - ' + score);

            // || Add score to array that will be stored in local storage
            highScoresArr = highScoresArr.concat(newLi.textContent);
            localStorage.setItem('highscores', JSON.stringify(highScoresArr));

            highScores();
        }
    })
}

function highScores() {
    highScoresArr = JSON.parse(localStorage.getItem('highscores'));

    for (var i = 0; i < highScoresArr.length; i++) {
        var newLi = document.createElement("li");
        leaderBoard.appendChild(newLi);
        newContent = document.createTextNode(highScoresArr[i]);
        newLi.appendChild(newContent);
    }

    // || Clear initials input element
    entry.setAttribute('style', 'display: none');
    highScoresEl.setAttribute('style', 'display: block');
}
