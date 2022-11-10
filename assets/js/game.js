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
};
