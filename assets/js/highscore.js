// Declare the localStorage
let highScore = localStorage.getItem('highScore');
let getHighscore = document.getElementsByClassName('highScore')[0];
let highscore = 0;

/**
 * Highscore gets updated if the new score is higher then the last highscore in the local storage
 */
function updateNewHighScore() {
    const oldHighScore = getHighScore();
    if (highScore === null) {
        localStorage.setItem("score", "0");
    };

    if (score > oldHighScore) {
        localStorage.setItem(`highScore`, score);
    };

    if (highScore >= '0') {
        getHighscore.innerHTML = localStorage.getItem('highScore');
    };
};

/**
 * Get the highScore from the local storage or 0
 */
function getHighScore() {
    return parseInt(localStorage.getItem("highScore")) || 0;
};