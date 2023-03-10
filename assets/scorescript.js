var finalScore = localStorage.getItem("Score");
document.getElementById("score").innerHTML = "Enter initials to see your score!";
var initInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var userInitSpan = document.querySelector("#user-initials");
var userScoreSpan = document.querySelector("#user-score");
var highScores = document.querySelector("#highScores");

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

  var li = document.createElement("li");
  li.textContent = init + " " + finalScore;
  highScores.appendChild(li);
  resetForm();
}

function resetForm() {
  document.getElementById("initialForm").reset();

}
