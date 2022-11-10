// The snake starts at this position
const BODY = [{
    x: 13,
    y: 13
}];
let newSegments = 0;

/**
 * Gets the style from the css to create the element of the snake 
 * and position for the snake
 */
function drawSnake(board) {
    BODY.forEach(segments => {
        let theSnakeElement = document.createElement('div');
        theSnakeElement.classList.add('snake');
        board.appendChild(theSnakeElement);
        theSnakeElement.style.gridColumnStart = segments.x
        theSnakeElement.style.gridRowStart = segments.y
    });
    console.log("drawSnake");
};

/**
 * Updates the snakes position to move it in a direction
 */
function updateSnake() {
    
    addMoreSegments()
    let direction = getDirection()
    // Updates each segment but the last one in the body to make them move while removing the last one
    for (let i = BODY.length - 2; i >= 0; i--) {
        BODY[i + 1] = {
            ...BODY[i]
        };
    };

    BODY[0].y += direction.y;
    BODY[0].x += direction.x;

    console.log("updateSnake");
};

/**
 * Get the amounts the segments will increase
 */
function expand(amounts) {
    newSegments += amounts
};

/**
 * Takes the position of the snake and checks it with the position of the food
 */
function onTheSnake(position, {
    ignoreSnakeHead = false 
    } = {}) {
    return BODY.some((segments, index) => {
        if (ignoreSnakeHead && index === 0) return false
        return equalPositions(segments, position)
    });
};

/**
 * Function to find the position of the head 
 */
function getTheSnakeHead() {
    return BODY[0];
};

/**
 * Functions checks if the head of the snake hits the body 
 */
function snakeIntersection() {
    return onTheSnake(BODY[0], {
        ignoreHead: true
    });
};

/**
 * Function to check if snake and food match up
 */
function equalPositions(num1, num2) {
    return num1.x === num2.x && num1.y === num2.y;  
};

/**
 * Takes and add new segments to the snake
 */
function addMoreSegments() {
    for (let i = 0; i < newSegments; i++) {

        BODY.push({
            ...BODY[BODY.length - 1]
        });
    };

    newSegments = 0
};