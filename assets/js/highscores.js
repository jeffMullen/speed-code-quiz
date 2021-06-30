var scorePage = document.querySelector('.score-page')
var leaderBoard = document.querySelector('#leaderboard')

var highScoresArr = [];
highScoresArr = JSON.parse(localStorage.getItem('highscores'));

console.log(highScoresArr);

scorePage.setAttribute('style', 'display: block');

highScoresArr = JSON.parse(localStorage.getItem('highscores'));
console.log(highScoresArr);

highScoresArr = JSON.parse(localStorage.getItem('highscores'));
console.log(highScoresArr.length);
console.log('highscores array ' + highScoresArr);


for (var i = 0; i < highScoresArr.length; i++) {
    var newLi = document.createElement("li");
    leaderBoard.appendChild(newLi);
    newContent = document.createTextNode(highScoresArr[i]);
    newLi.appendChild(newContent);
}

