let renderTime = 0;
let SPEED = 1;

window.requestAnimationFrame(animation);

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

};

/**
 * Updates the segements to fit new position or version
 */
function update() {

};
