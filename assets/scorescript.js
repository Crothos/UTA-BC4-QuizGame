var finalScore = localStorage.getItem("Score");
document.getElementById("score").innerHTML = "Your score is " + finalScore +"!";
var initInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var userInitSpan = document.querySelector("#user-initials");
var userScoreSpan = document.querySelector("#user-score");

renderScore();

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  var init = document.querySelector("#initials").value;
    localStorage.setItem("Initials", init);
    renderScore();
  }
);

function renderScore() {
  var init = localStorage.getItem("Initials");
  userInitSpan.textContent = init;
  userScoreSpan.textContent = finalScore;
}