const controlButtons = document.getElementsByClassName('touch-controls')[0];
const touchControls = document.getElementsByClassName('btnControls');

// Event listener for keydown to control the input of moving the snake
window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            if (lastDirection.y !== 0) 
            break;
            direction = {
                x: 0,
                y: -1
            };
            break;
        case "ArrowLeft":
            if (lastDirection.x !== 0) 
            break;
            direction = {
                x: -1,
                y: 0
            };
            break;
        case "ArrowRight":
            if (lastDirection.x !== 0) 
            break;
            direction = {
                x: 1,
                y: 0
            };
            break;
        case "ArrowDown":
            if (lastDirection.y !== 0) 
            break;
            direction = {
                x: 0,
                y: 1
            };
            break;
    }
});

/**
 * Function to get the attribute for the game controls on the game page to move the snake
 */
function touchControlsClicked() {
    if (this.getAttribute("id") === "upBtn") {
        if(lastDirection.y !== 0){
         return;
        } else {
         direction = {
             x: 0,
             y: -1
            };
            return;
        }
    } else if (this.getAttribute("id") === "rightBtn") {
       if(lastDirection.x !== 0){
        return;
       } else {
        direction = {
            x: 1,
            y: 0
        };
        return;
       }
    } else if (this.getAttribute("id") === "leftBtn") {
        if(lastDirection.x !== 0){
            return;
        } else {
            direction = {
                x: -1,
                y: 0
        };
        return;
       }
    } else if (this.getAttribute("id") === "downBtn") {
        if(lastDirection.y !== 0){
            return;
        } else {
            direction = {
                x: 0,
                y: 1
            };
            return;
        }
    }
}
