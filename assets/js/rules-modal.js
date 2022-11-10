let rulesBtn = document.querySelector("#rules-btn");
let rulesModal = document.querySelector(".rules-modal");
let closeRulesBtn = document.querySelector("#close-rules");

/**
 * Event to close the rules modal by clicking outside the rules 
 * container in the rules modal window
 */
 window.onclick = function (event) {

    if (event.target == rulesModal) {

        rulesModal.style.display = "none";

    }
};

/**
 * Functions to open and close the rules modal with event listener
 */
 function openRules() {
    rulesModal.style.display = "block";
}

function closeRules() {
    rulesModal.style.display = "none";
}

rulesBtn.addEventListener("click", openRules);
closeRulesBtn.addEventListener("click", closeRules);
