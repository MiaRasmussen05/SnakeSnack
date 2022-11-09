// firstTime variable is declared to target the local storage of a browser
const firstTime = localStorage.getItem('visited');
let welcomeMessage = document.getElementById('welcome');

//  Functions to show and hide welcome message
function startWelcome() {
    welcomeMessage.style.display = "block";
};

function welcomeLeave() {
    welcomeMessage.style.display = "none";
};

// Functions will add a second message after the welcome message
function startMessage() {
    welcomeMessage.style.display = "block";
    welcomeMessage.textContent = "Let's get started!"
};

function startLeave() {
    welcomeMessage.style.display = "none";
};