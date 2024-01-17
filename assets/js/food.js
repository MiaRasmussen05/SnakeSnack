let food = getARandomFoodPosition();
let foodTimeout; 

// The amount the snake expands by every food it eats
const EXPANSION = 1;

let isGoodFood = true; // Variable to track the type of food
let score = 0;
const getScore = document.getElementsByClassName('score')[0];

/**
 * Gets the style from the css to create the element of the food
 * and position it on the board
 */
function drawFood(board) {
    let theFoodElement = document.createElement('div');
    theFoodElement.classList.add('food');

    // Check the type of food based on the variable isGoodFood
    if (isGoodFood) {
        // Good food
        theFoodElement.classList.add('good-food');
    } else {
        // Bad food
        theFoodElement.classList.add('bad-food');
    }

    board.appendChild(theFoodElement);
    theFoodElement.style.gridColumnStart = food.x;
    theFoodElement.style.gridRowStart = food.y;
}

function determineFoodType() {
    const randomValue = Math.random();

    // Check the type of food based on the random value
    if (randomValue < 0.9) {
        // 90% chance for good food
        isGoodFood = true;
    } else {
        // 10% chance for bad food
        isGoodFood = false;
    }
}


/**
 * Update new food position and get score from expansion of the snake
 */
function updateFood() {
    if (onTheSnake(food)) {
        if (isGoodFood) {
            // Good food
            expand(EXPANSION);
            score += 9;
        } else {
            // Bad food
            score += -5;
        }

        food = getARandomFoodPosition();
        determineFoodType();
        resetFoodTimeout();
    }
}

function drawNewFood() {
    food = getARandomFoodPosition();
    determineFoodType();
    drawFood(board);
    resetFoodTimeout();
}

function resetFoodTimeout() {
    clearTimeout(foodTimeout);

    if (level >= 20) {
        timeoutDuration = 5000;
    } else if (level >= 10) {
        timeoutDuration = 7000;
    } else {
        timeoutDuration = 12000;
    }

    foodTimeout = setTimeout(() => {
        if (!isPauseDisplayed) {
            drawNewFood()
        } else {
            resetFoodTimeout();
        }
    }, timeoutDuration);
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
