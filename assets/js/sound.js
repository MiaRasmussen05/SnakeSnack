const music = new Audio("assets/sound/music.mp3");
let musicBtnPlay = document.getElementsByClassName("music");
let musicOff = document.getElementById("musicBtnOff");
let musicOn = document.getElementById("musicBtnOn");

/**
 * For loop that makes it posisble for both buttons to be clicked
 * first the musicOn button and then the musicOff button
 */
for (var i = 0; i < musicBtnPlay.length; i++) {
    musicBtnPlay[i].addEventListener("click", function () {
      if (music.paused) {
        music.play();
        music.volume = 0.1;
        music.loop = true;
        musicOn.style.display = 'block';
        musicOff.style.display = 'none';
      } else {
        music.pause();
        musicOff.style.display = 'block';
        musicOn.style.display = 'none';
      };
    });
  };