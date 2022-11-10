// The snake starts at this position
const BODY = [{
    x: 13,
    y: 13
}];

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