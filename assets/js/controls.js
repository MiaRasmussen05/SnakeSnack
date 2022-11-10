// Event listener for keydown to control the input of moving the snake
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastDirection.y !== 0) 
            break
            direction = {
                x: 0,
                y: -1
            }
            break
        case 'ArrowLeft':
            if (lastDirection.x !== 0) 
            break
            direction = {
                x: -1,
                y: 0
            }
            break
        case 'ArrowRight':
            if (lastDirection.x !== 0) 
            break
            direction = {
                x: 1,
                y: 0
            }
            break
        case 'ArrowDown':
            if (lastDirection.y !== 0) 
            break
            direction = {
                x: 0,
                y: 1
            }
            break
    };
});