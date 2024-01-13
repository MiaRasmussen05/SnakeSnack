const toggleControlsBtn = document.getElementById('toggleControlsBtn');
const controlsTable = document.querySelector('.controls table');

// Function to toggle the display of controls
function toggleControls() {
    controlsTable.classList.toggle('hidden');
}

// Hide the controls
controlsTable.classList.add('hidden');

// Event listener for the button click
toggleControlsBtn.addEventListener('click', toggleControls);