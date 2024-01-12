// Retrieve the pause button element
const pauseBtn = document.getElementById('pauseBtn');

// Variable to store the previous speed before pausing
let previousSpeed = regularSpeed;

let isPauseDisplayed = false;

const pauseMessage = document.createElement('div');
pauseMessage.classList.add('pause-message');
document.body.appendChild(pauseMessage);

function displayPauseMessage(pause) {
    pauseMessage.innerText = `Pause`;
    isPauseDisplayed = true;

    pauseMessage.classList.add('show-pause');
}

// Event listener for the pause button click
pauseBtn.addEventListener('click', () => {
    togglePause();
});

// Event listener for double-clicking on the screen
document.body.addEventListener('dblclick', () => {
    togglePause();
});

// Event listener for pressing "P" on the keyboard
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'p') {
        togglePause();
    }
});

function togglePause() {
    if (SPEED !== 0) {
        previousSpeed = SPEED;
        SPEED = 0;
        pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        displayPauseMessage(true);
    } else {
        SPEED = previousSpeed;
        pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        isPauseDisplayed = false;
        pauseMessage.classList.remove('show-pause');
    }
}