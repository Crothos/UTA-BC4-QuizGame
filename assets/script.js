var startButton = document.querySelector("#startButton");

startButton.addEventListener("click", function() {
    var welcome = document.getElementById("welcome");
    if (welcome.style.display === "none") {
        welcome.style.display = "block";
    } else {
        welcome.style.display = "none";
    }
});