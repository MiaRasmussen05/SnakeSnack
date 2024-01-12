let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if (!touchStartX || !touchStartY) {
        return;
    }

    const touchEndX = event.touches[0].clientX;
    const touchEndY = event.touches[0].clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    // Set a threshold to determine a valid swipe
    const threshold = 3;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe "X"
        if (deltaX > threshold && lastDirection.x !== -1) {
            // Swipe right
            direction = { x: 1, y: 0 };
        } else if (deltaX < -threshold && lastDirection.x !== 1) {
            // Swipe left
            direction = { x: -1, y: 0 };
        }
    } else {
        // Vertical swipe "Y"
        if (deltaY > threshold && lastDirection.y !== -1) {
            // Swipe down
            direction = { x: 0, y: 1 };
        } else if (deltaY < -threshold && lastDirection.y !== 1) {
            // Swipe up
            direction = { x: 0, y: -1 };
        }
    }

    // Reset touchStart values
    touchStartX = 0;
    touchStartY = 0;
}