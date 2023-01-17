score = 0;
scoreC = "";

//get scores from local storage and print as list
var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
highscores.sort(function (a, b) {
  return b.score - a.score;
});
highscores.forEach(function (score) {
  var scoreContent = "<li>Initials: " + score.initials + " - Score: " + score.score + "</li>";
  scoreC += scoreContent;
  document.getElementById("highscores").innerHTML = scoreC;
});

// function to clear local storage
function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}
document.getElementById("clear").onclick = clearHighscores;