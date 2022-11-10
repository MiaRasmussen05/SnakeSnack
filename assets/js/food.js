let food = { x: 1, y: 3}
// The amount the snake expans by every food it eats
const EXPANSION = 1;

/**
 * Gets the style from the css to create the element of the food
 * and position it on the board
 */
function drawFood(board) {
    const theFoodElement = document.createElement('div');
    theFoodElement.classList.add('food')
    board.appendChild(theFoodElement)
    theFoodElement.style.gridColumnStart = food.x
    theFoodElement.style.gridRowStart = food.y

    console.log("drawFood");
}


function updateFood() {
    if (onSnake(food)) {
        expandSnake(EXPANSION)
        food = { x: 5, y: 3 }
    };

    console.log("updateFood");
};