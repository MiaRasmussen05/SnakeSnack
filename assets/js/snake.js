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

function updateSnake() {
    console.log("updateSnake");
};