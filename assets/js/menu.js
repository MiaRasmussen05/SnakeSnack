let setting = document.getElementById("settings");
let toggle = document.getElementById("toggleMenu");
let settingsBtn = document.getElementById("settingsBtn");
let menuBtn = document.getElementById("menuBtn");
let settingsOverlay = document.querySelector(".overlay");
let overlayMenu = document.querySelector(".overlayMenu");

/**
 * Event to close the settings and menu by clicking outside 
 * the settings or hamburger menu container
 */
window.onclick = function (event) {
    if (event.target == settingsOverlay) {
        setting.style.display = "none";
        settingsOverlay.style.display = "none";
    }

    if (event.target == overlayMenu) {
        toggle.style.display = "none";
        overlayMenu.style.display = "none";
    }
};

/**
 * Open and close the settings pop up window
 */
 function openSettings() {
    setting.style.display = "block";
    settingsOverlay.style.display = "block";
}

function closeSettings() {
    setting.style.display = "none";
    settingsOverlay.style.display = "none";
}

/**
 * Open and close the hamburger menu on smaller screens
 */
function openToggleMenu() {
    toggle.style.display = "block";
    overlayMenu.style.display = "block";
}

function closeToggleMenu() {
    toggle.style.display = "none";
    overlayMenu.style.display = "none";
}


settingsBtn.addEventListener("click", openSettings);
settingsOverlay.addEventListener("click", openToggleMenu);