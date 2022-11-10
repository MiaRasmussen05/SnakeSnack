let setting = document.getElementById("settings")
let toggle = document.getElementById("toggleMenu")

/**
 * Open and close the settings pop up window
 */
 function openSettings() {
    setting.style.display = "block";
};

function closeSettings() {
    setting.style.display = "none";
};

/**
 * Open and close the hamburger menu on smaller screens
 */
 function openToggleMenu() {
    toggle.style.display = "block";
};

function closeToggleMenu() {
    toggle.style.display = "none";
};
