let copyDisclaimer = document.querySelector(".fa-copyright");
let copyright = document.querySelector(".copyright");
let disclaimer = document.querySelector(".disclaimer");

// Functions to hide the copyright icon when clicked and show the copyright and disclaimer text
function openRights() {
    copyright.style.display = "block";
    disclaimer.style.display = "block";
    copyDisclaimer.style.display = "none";
}

function closeRights() {
    copyright.style.display = "none";
    disclaimer.style.display = "none";
    copyDisclaimer.style.display = "block";
}

//set interval to close the copyright and disclaimer text after 5 seconds
setInterval(closeRights, 5000);
