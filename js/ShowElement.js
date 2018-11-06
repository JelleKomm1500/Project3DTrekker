/**
 * Laat het menu zien, waarna je het aantal players kunt kiezen.
 *
 */
function ShowPlay() {
    var x = document.getElementById("choosePlayers");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
/**
 * Laat het menu zien, waarmee je de naam, controls kunt kiezen voor twee spelers
 *
 */
function ShowMenu2Player() {
    var play = document.getElementById("playGame");
    var i = document.getElementById("player1");
    var j = document.getElementById("player2");

    i.setAttribute("class", "col-md-6 text-center");
    j.setAttribute("class", "col-md-6 text-center");

    if (i.style.display === "none" && j.style.display === "none") {
        play.style.display = "block";
        i.style.display = "block";
        j.style.display = "block";
    } 
}
/**
 * Laat het menu zien, waarmee je de naam, controls kunt kiezen voor drie spelers
 *
 */
function ShowMenu3Player() {
    var play = document.getElementById("playGame");
    var i = document.getElementById("player1");
    var j = document.getElementById("player2");
    var k = document.getElementById("player3");

    i.setAttribute("class", "col-md-4 text-center");
    j.setAttribute("class", "col-md-4 text-center");
    k.setAttribute("class", "col-md-4 text-center");
    if (i.style.display === "none" && j.style.display === "none" && k.style.display === "none") {
        play.style.display = "block";
        i.style.display = "block";
        j.style.display = "block";
        k.style.display = "block";
    }
}
/**
 * Laat het menu zien, waarmee je de naam, controls kunt kiezen voor vier spelers
 *
 */
function ShowMenu4Player() {
    var play = document.getElementById("playGame");
    var i = document.getElementById("player1");
    var j = document.getElementById("player2");
    var k = document.getElementById("player3");
    var l = document.getElementById("player4");

    if (i.style.display === "none" && j.style.display === "none" && k.style.display === "none" && l.style.display === "none") {
        play.style.display = "block";
        i.style.display = "block";
        j.style.display = "block";
        k.style.display = "block";
        l.style.display = "block";
    }
}