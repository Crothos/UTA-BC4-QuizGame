var startButton = document.querySelector("#startButton");
var timeEl = document.querySelector("#timer");
var trueButton1 = document.querySelector("#true1");
var trueButton2 = document.querySelector("#true2");
var trueButton3 = document.querySelector("#true3");
var trueButton4 = document.querySelector("#true4");
var trueButton5 = document.querySelector("#true5");
var finalScore;

document.querySelectorAll('.false').forEach(item => {
    item.addEventListener('click', event => {
        secondsLeft -= 15;
    })
  })

startButton.addEventListener("click", function() {
    var welcome = document.getElementById("welcome");
    if (welcome.style.display === "none") {
        welcome.style.display = "block";
    } else {
        welcome.style.display = "none";
    }
    
    var questions = document.getElementById("question1");
    if (questions.style.display === "block") {
        questions.style.display = "none";
    } else {
        questions.style.display = "block";
    }
setTime();
});

trueButton1.addEventListener("click", function() {
    console.log("That is indeed correct");

    var close = document.getElementById("question1");
    if (close.style.display === "none") {
        close.style.display = "block";
    } else {
        close.style.display = "none";
    }

    var questions = document.getElementById("question2");
    if (questions.style.display === "block") {
        questions.style.display = "none";
    } else {
        questions.style.display = "block";
    }
})

trueButton2.addEventListener("click", function() {
    console.log("That is indeed correct");

    var close = document.getElementById("question2");
    if (close.style.display === "none") {
        close.style.display = "block";
    } else {
        close.style.display = "none";
    }

    var questions = document.getElementById("question3");
    if (questions.style.display === "block") {
        questions.style.display = "none";
    } else {
        questions.style.display = "block";
    }
})

trueButton3.addEventListener("click", function() {
    console.log("That is indeed correct");

    var close = document.getElementById("question3");
    if (close.style.display === "none") {
        close.style.display = "block";
    } else {
        close.style.display = "none";
    }

    var questions = document.getElementById("question4");
    if (questions.style.display === "block") {
        questions.style.display = "none";
    } else {
        questions.style.display = "block";
    }
})

trueButton4.addEventListener("click", function() {
    console.log("That is indeed correct");

    var close = document.getElementById("question4");
    if (close.style.display === "none") {
        close.style.display = "block";
    } else {
        close.style.display = "none";
    }

    var questions = document.getElementById("question5");
    if (questions.style.display === "block") {
        questions.style.display = "none";
    } else {
        questions.style.display = "block";
    }
})

trueButton5.addEventListener("click", function() {
    console.log("That is indeed correct");
    finalScore = secondsLeft;
    localStorage.setItem("Score", finalScore);
    window.location.assign("./highscores.html");
})

// TIMER

var secondsLeft = 45;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft < 1) {
      clearInterval(timerInterval);
      loseGame();
    }

  }, 1000);
}

function loseGame() {
    var play = confirm("You lost, bruh. Try again?")
    if (play === true) {
        location.reload();
    } else {
        alert("Your loss, bruh.")
    }
}

// STORE TIMER IN VARIABLE
// FORM ON HIGHSCORES PAGE TO SAVE INITIALS AND SCORE
// DISPLAYS HIGH SCORES AND BUTTON TO CLEAR SCORES?