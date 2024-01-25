// Music
const music = new Audio("assets/sounds/music.mp3");
const healtyFoodEffect = new Audio('assets/sounds/healtyfood.mp3');
const gameOverSound = new Audio('assets/sounds/gameover.mp3');
// For music button
let musicBtnPlay = document.getElementsByClassName("music");
let musicOff = document.getElementById("musicBtnOff");
let musicOn = document.getElementById("musicBtnOn");
let musicOffMenu = document.getElementById("musicBtnOffMenu")
let musicOnMenu = document.getElementById("musicBtnOnMenu")
// For mute sound effects button
let muted = false;
let soundBtnPlay = document.getElementsByClassName("sound");
let soundOff = document.getElementById("soundBtnOff");
let soundOn = document.getElementById("soundBtnOn");
let soundOffMenu = document.getElementById("soundBtnOffMenu")
let soundOnMenu = document.getElementById("soundBtnOnMenu")


//For loop that makes it possible for both buttons to be clicked
// first the musicOn button and then the musicOff button
for (var i = 0; i < musicBtnPlay.length; i++) {
    musicBtnPlay[i].addEventListener("click", function () {
      if (music.paused) {
        music.play();
        music.volume = 0.1;
        music.loop = true;
        musicOn.style.display = 'block';
        musicOff.style.display = 'none';
        musicOnMenu.style.display = 'block';
        musicOffMenu.style.display = 'none';
      } else {
        music.pause();
        musicOff.style.display = 'block';
        musicOn.style.display = 'none';
        musicOffMenu.style.display = 'block';
        musicOnMenu.style.display = 'none';
      }
    });
  }

  // Enable sounds when page is done loading 
  window.addEventListener('DOMContentLoaded', (event) => { 
    startMute();
  });
  
  // For loopthat makes it possible for both buttons to be clicked
  for (var i = 0; i < soundBtnPlay.length; i++) {
    soundBtnPlay[i].addEventListener("click", function () {
      if (muted) {
        startMute();
        soundOff.style.display = 'block';
        soundOn.style.display = 'none';
        soundOffMenu.style.display = 'block';
        soundOnMenu.style.display = 'none';
      } else {
        endMute();
        soundOff.style.display = 'none';
        soundOn.style.display = 'block';
        soundOffMenu.style.display = 'none';
        soundOnMenu.style.display = 'block';
      }
    });
  }
  
  /**
   * Function to create mute effect for sound button
   */
  function startMute() {
    muted = true;
    healtyFoodEffect.volume = 0;
    gameOverSound.volume = 0;
  }
  
  function endMute() {
    muted = false;
    healtyFoodEffect.volume = 0.1;
    gameOverSound.volume = 0.1;
  }
  