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
    }

    if (score > oldHighScore) {
        localStorage.setItem('highScore', score);

        // Check if the score is within the top 10
        if (leaderboardData.length < 10 || score > leaderboardData[9].score) {
            // Prompt the user for their name
            const playerName = prompt("Congratulations! You made it to the leaderboard! Enter your name:");

            // Add the new score to the leaderboard with the entered name
            leaderboardData.push({ name: playerName || 'Anonymous', score: score });
            // Sort the leaderboard by score in descending order
            leaderboardData.sort((a, b) => b.score - a.score);
            // Keep only the top N scores (e.g., 10)
            leaderboardData = leaderboardData.slice(0, 10);

            // Save the updated leaderboard to local storage
            localStorage.setItem('leaderboard', JSON.stringify(leaderboardData));

            // Call displayLeaderboard to update the displayed leaderboard
            displayLeaderboard();
        }
    }

    if (highScore >= '0') {
        getHighscore.innerHTML = localStorage.getItem('highScore');
    }
}

/**
 * Get the highScore from the local storage or 0
 */
function getHighScore() {
    return parseInt(localStorage.getItem("highScore")) || 0;
}
