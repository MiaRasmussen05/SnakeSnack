const gameOverMessage = document.querySelector('.game-over');
let gameOver = false;
let restartBtn = document.querySelector('.restart');
  
/**
 * Function restarts the game after restart button is clicked by refreshing the page
 */
function restart(){
    window.location = './game.html';
};