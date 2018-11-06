/**
 * Verbergt het hoofdmenu in de index.html file, na het klikken van Play Game.
 */
function HideElement() {
    var x = document.getElementById("menuButtons");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/**
 * Verbergt het aantal spelers menu in de index.html file, na het selecteren van het aantal spelers.
 */
function HidePlay() {
    var x = document.getElementById("choosePlayers");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}