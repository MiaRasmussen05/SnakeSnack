let renderTime = 0;
let SPEED = 1;
let board = document.getElementsByClassName('board')[0];

window.addEventListener('DOMContentLoaded', (event) => {
    window.requestAnimationFrame(animation);
    gameOverMessage.style.display = "none"
    console.log("window");
});

/**
 * Animation frame request that updates the game every 0.15 sec 
 */
function animation(time) { 
    if (gameOver) {
        board.style.display = 'none'
        gameOverMessage.style.display = 'block'
        updateNewHighScore();
    };
    // Calling the request anitmation frame to make animation work
    window.requestAnimationFrame(animation);
    const secondsSincePreviousRender = (time - renderTime) / 150;
    if (secondsSincePreviousRender < 1 / SPEED) return
    renderTime = time

    console.log("last render");

    draw();
    update();
};

/**
 * Draws only what is needed based on the new updated version
 */
function draw() {
    board.innerHTML = ""
    drawSnake(board);
    drawFood(board);
};

/**
 * Updates the segements to fit new position or version
 */
function update() {
    getScore.innerHTML = score
    getHighscore.innerHTML = highScore
    updateSnake();
    updateFood();
    checkTheDeath();
};

function checkTheDeath() {
    gameOver = outsideGrid(getTheSnakeHead()) || snakeIntersection()
};
