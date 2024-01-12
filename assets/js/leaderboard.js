// Get leaderboard data from local storage or initialize an empty array
let leaderboardData = JSON.parse(localStorage.getItem('leaderboard')) || [];

// Update new high score and add it to the leaderboard
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
        }
    }

    if (highScore >= '0') {
        getHighscore.innerHTML = localStorage.getItem('highScore');
    }
}

// Function to display the leaderboard data
function displayLeaderboard() {
    // Access the DOM element where you want to display the leaderboard
    const leaderboardElement = document.getElementById('leaderboard');

    // Clear existing content
    leaderboardElement.innerHTML = '';

    // Iterate through the leaderboard data and create HTML elements
    leaderboardData.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${entry.name} - ${entry.score}`;
        leaderboardElement.appendChild(listItem);
    });
}

// Call this function to display the leaderboard when needed
displayLeaderboard();