// script.js

function confirmName() {
    var userName = document.getElementById("username").value;
    var nameColor = document.getElementById("name-color").value;
    localStorage.setItem("userName", userName);
    localStorage.setItem("nameColor", nameColor);

    // Redirect to main_game.html
    window.location.href = "main_game.html";
}
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('Background-Music');
    audio.play();
});
