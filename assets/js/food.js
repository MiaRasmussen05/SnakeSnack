let food = getARandomFoodPosition();
// The amount the snake expans by every food it eats
const EXPANSION = 1;

let score = 0;
const getScore = document.getElementsByClassName('score')[0];


/**
 * Gets the style from the css to create the element of the food
 * and position it on the board
 */
function drawFood(board) {
    let theFoodElement = document.createElement('div');
    theFoodElement.classList.add('food');
    board.appendChild(theFoodElement);
    theFoodElement.style.gridColumnStart = food.x;
    theFoodElement.style.gridRowStart = food.y;
}

/**
 * Update new food position and get score from expansion of the snake
 */
function updateFood() {
    if (onTheSnake(food)) {
        expand(EXPANSION);
        score++;
        food = getARandomFoodPosition();
    }
}

/**
 * Gives a random position for the food on the board that dosn't have the snake on it
 */
function getARandomFoodPosition() {
    let theNewFoodPosition;
    if (theNewFoodPosition == null || onTheSnake(theNewFoodPosition)) {
        theNewFoodPosition = aRandomGridPosition();
    }
    return theNewFoodPosition;
}
