let level = 0;
const SPEED_INCREMENT = 0.5;
let specialLevel = false;
let regularSpeed = SPEED; // Store regular speed value
let isMessageDisplayed = false;

const levelMessage = document.createElement('div');
levelMessage.classList.add('level-message', 'show-message');
document.body.appendChild(levelMessage);

function displayLevelMessage(level) {
    levelMessage.innerText = `Level ${level}`;
    levelMessage.style.opacity = '1';
    isMessageDisplayed = true;

    // Pause the game while the message is displayed
    SPEED = 0;

    setTimeout(() => {
        levelMessage.style.opacity = '0'; // Hide the message after a delay
        isMessageDisplayed = false;
        levelMessage.classList.remove('show-message');

        // Resume the regular or special level speed after the message disappears
        SPEED = specialLevel ? 1 : regularSpeed;
    }, 2000); // Adjust the delay time as needed (in milliseconds)
}

function updateLevelAndSpeed(score) {
    if (score >= (level + 1) * 20) {
        level++;
        if (!isMessageDisplayed) {
            displayLevelMessage(level); // Display level message when level changes
        }

        if (level % 7 === 0) {
            specialLevel = true;
        } else {
            specialLevel = false;
            regularSpeed += SPEED_INCREMENT; // Increment regular speed
        }

        // Set speed to 0 when the message is displayed, then restore regular or special level speed
        SPEED = isMessageDisplayed ? 0 : (specialLevel ? 1 : regularSpeed);
    } else {
        // Ensure the speed matches the regular speed when not updating the level
        SPEED = regularSpeed;
    }
}