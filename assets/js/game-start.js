let gameStarted = false;  // Variable to track whether the game has started

// Display a "START GAME" message
const startGameMessage = document.createElement('div');
startGameMessage.classList.add('start-game-message');
startGameMessage.innerText = 'START GAME';
document.body.appendChild(startGameMessage);