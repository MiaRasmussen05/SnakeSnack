let level = 0;
const SPEED_INCREMENT = 0.5;
let specialLevel = false;
let regularSpeed = SPEED; // Store regular speed value
let isMessageDisplayed = false;

const levelMessage = document.createElement('div');
levelMessage.classList.add('level-message');
document.body.appendChild(levelMessage);

function displayLevelMessage(level) {
    levelMessage.innerText = `Level ${level}`;
    levelMessage.style.opacity = '1';
    isMessageDisplayed = true;

    // Pause the game while the message is displayed
    SPEED = 0;

    levelMessage.classList.add('show-message');

    setTimeout(() => {
        levelMessage.style.opacity = '0'; // Hide the message after a delay
        isMessageDisplayed = false;
        levelMessage.classList.remove('show-message');
        levelMessage.classList.remove('fade-out');
        levelMessage.style.left = '0';

        // Resume the regular or special level speed after the message disappears
        SPEED = specialLevel ? 1 : regularSpeed;
    }, 2000); // Adjust the delay time as needed (in milliseconds)
}

function updateLevelAndSpeed(score) {
    if (score >= (level + 1) * 50) {
        level++;
        if (!isMessageDisplayed) {
            displayLevelMessage(level); // Display level message when level changes
        }

        // Generate a random number between 0 and 1
        const randomChance = Math.random();

        specialLevel = randomChance < 0.2;

        if (specialLevel) {
            regularSpeed += SPEED_INCREMENT; // Increase regular speed upon reaching special level
            SPEED = 1; // Set speed to 1 for the special level
        } else {
            regularSpeed += SPEED_INCREMENT; // Increase regular speed if not a special level
            SPEED = regularSpeed;
        }

        setTimeout(() => {
            SPEED = 0;
            setTimeout(() => {
                // Resume regular or special level speed after the pause
                SPEED = specialLevel ? 1 : regularSpeed;
            }, 1500); // Pause between levels 
        }, 0); // Delay before slowing down
    } else {
        if (!specialLevel) {
            // Speed matches the regular speed when the level is not updating
            SPEED = regularSpeed;
        }
    }
}