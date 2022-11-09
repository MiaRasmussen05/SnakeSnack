let rulesBtn = document.querySelector("#rules-btn");
let rulesModal = document.querySelector(".rules-modal");
let closeRulesBtn = document.querySelector("#close-rules");

/**
 * Functions to open and close the rules modal with event listener
 */
 function openRules() {
    rulesModal.style.display = "block";
};

function closeRules() {
    rulesModal.style.display = "none";
};

rulesBtn.addEventListener("click", openRules);
closeRulesBtn.addEventListener("click", closeRules);