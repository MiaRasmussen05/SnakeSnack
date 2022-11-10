/**
 * Function checks the snake element can't go outside the grid"
 */
function outsideGrid(position) {
    return (
        position.x < 1 || position.x > 26 ||
        position.y < 1 || position.y > 26
    );

};

/**
 * Function gives a random grid position in the x and y axes
 */
function aRandomGridPosition() {
    return {
        x: Math.floor(Math.random() * 26) + 1,
        y: Math.floor(Math.random() * 26) + 1
    };
};
