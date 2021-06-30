var scorePage = document.querySelector('.score-page')
var leaderBoard = document.querySelector('#leaderboard')

var highScoresArr = [];
highScoresArr = JSON.parse(localStorage.getItem('highscores'));

// || Setting highscore array and looping through to display them

scorePage.setAttribute('style', 'display: block');

highScoresArr = JSON.parse(localStorage.getItem('highscores'));

highScoresArr = JSON.parse(localStorage.getItem('highscores'));

if (highScoresArr !== null) {
    for (var i = 0; i < highScoresArr.length; i++) {
        var newLi = document.createElement("li");
        leaderBoard.appendChild(newLi);
        newContent = document.createTextNode(highScoresArr[i]);
        newLi.appendChild(newContent);
    }
}

