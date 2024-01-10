// Retrieve the pause button element
const pauseBtn = document.getElementById('pauseBtn');

// Variable to store the previous speed before pausing
let previousSpeed = regularSpeed;

// Event listener for the pause button click
pauseBtn.addEventListener('click', () => {
    if (SPEED !== 0) {
        previousSpeed = SPEED;
        SPEED = 0;
        pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        
        SPEED = previousSpeed;
        pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
});