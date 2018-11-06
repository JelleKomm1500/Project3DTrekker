/**
 * Verander de afbeelding op het player menu op basis van de radio input, waarna aan hand van een case de afbeelding per speler bepaald wordt.
 * 
 * @param {string} value De waarde van de input van de radio knop
 */
function check_value(value) {
    var x = value;
    switch (x) {
        case "Trekker1":
            document.getElementById("imagePlayer1").setAttribute("src", "img/Select Picture/Trekker.PNG");
            break;
        case "Trekker2":
            document.getElementById("imagePlayer2").setAttribute("src", "img/Select Picture/Trekker.PNG");
            break;
        case "Trekker3":
            document.getElementById("imagePlayer3").setAttribute("src", "img/Select Picture/Trekker.PNG");
            break;
        case "Trekker4":
            document.getElementById("imagePlayer4").setAttribute("src", "img/Select Picture/Trekker.PNG");
            break;
        case "Bulldozer1":
            document.getElementById("imagePlayer1").setAttribute("src", "img/Select Picture/Bulldozer.PNG");
            break;
        case "Bulldozer2":
            document.getElementById("imagePlayer2").setAttribute("src", "img/Select Picture/Bulldozer.PNG");
            break;
        case "Bulldozer3":
            document.getElementById("imagePlayer3").setAttribute("src", "img/Select Picture/Bulldozer.PNG");
            break;
        case "Bulldozer4":
            document.getElementById("imagePlayer4").setAttribute("src", "img/Select Picture/Bulldozer.PNG");
            break;
    }
}