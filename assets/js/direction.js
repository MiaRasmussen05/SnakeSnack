let direction = { x: 0, y: 0 }
let lastDirection = { x: 0, y: 0 }

/**
 * Listens for the user input to move the snake in a direction
 */
function getDirection() {
  lastDirection = direction
  return direction
}