const touchControls = document.getElementsByClassName('btnControls');

function touchControlsClicked() {
    if (this.getAttribute("id") === "upBtn") {
        if (lastDirection.y !== 0) {
            return;
        } else {
            direction = {
                x: 0,
                y: -1
            };
            return;
        }
    } else if (this.getAttribute("id") === "rightBtn") {
        if (lastDirection.x !== 0) {
            return;
        } else {
            direction = {
                x: 1,
                y: 0
            };
            return;
        }
    } else if (this.getAttribute("id") === "leftBtn") {
        if (lastDirection.x !== 0) {
            return;
        } else {
            direction = {
                x: -1,
                y: 0
            };
            return;
        }
    } else if (this.getAttribute("id") === "downBtn") {
        if (lastDirection.y !== 0) {
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

for (let i = 0; i < touchControls.length; i++) {
    touchControls[i].addEventListener('click', touchControlsClicked);
}