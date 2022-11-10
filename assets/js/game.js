let renderTime = 0;
let SPEED = 1;
let board = document.getElementsByClassName('board')[0];

window.addEventListener('DOMContentLoaded', (event) => {
    window.requestAnimationFrame(animation);

    console.log("window");
});

/**
 * Animation frame request that updates the game every 0.15 sec 
 */
function animation(time) { 
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
    updateSnake();
    updateFood();
};
