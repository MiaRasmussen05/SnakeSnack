let renderTime = 0;
let SPEED = 1;
let board = document.getElementsByClassName('board')[0];

window.addEventListener('DOMContentLoaded', (event) => {
    window.requestAnimationFrame(animation);
    gameOverMessage.style.display = "none";
});

function isSnakeMoving() {
    // Add your logic to check if the snake is moving
    // For example, you can check if the direction is non-zero
    return direction.x !== 0 || direction.y !== 0;
}

/**
 * Animation frame request that updates the game every 0.15 sec 
 */
function animation(time) {
    if (gameOver) {
        board.style.display = 'none';
        gameOverMessage.style.display = 'block';
        updateNewHighScore();
        gameOverSound.play();
        gameOverSound.loop = false;
        return; // Exit the animation loop on game over
    }

    if (!gameStarted && isSnakeMoving()) {
        // The snake has started moving, hide the "START GAME" message
        gameStarted = true;
        startGameMessage.style.display = 'none';
    }

    window.requestAnimationFrame(animation);

    const frameDuration = time - renderTime;
    if (frameDuration < 400 / SPEED) return; // Control frame rate based on SPEED

    renderTime = time;

    draw(); // Draw elements first
    update(); // Update after drawing
}

/**
 * Draws only what is needed based on the new updated version
 */
function draw() {
    board.innerHTML = "";
    drawSnake(board);
    drawFood(board);
}

/**
 * Updates the segements to fit new position or version
 */
function update() {
    getScore.innerHTML = score;
    getHighscore.innerHTML = highScore;
    updateSnake();
    updateFood();
    checkTheDeath();

    updateLevelAndSpeed(score);
}

function checkTheDeath() {
    gameOver = outsideGrid(getTheSnakeHead()) || snakeIntersection();
}
