function showElem() {
    var x = document.getElementById("customPlayer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showPlay() {
    var x = document.getElementById("choosePlayers");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showMenu1Player() {
    var play = document.getElementById("playGame");
    var i = document.getElementById("player1");

    i.setAttribute("class", "col-md-12 text-center");

    if (i.style.display === "none") {
        play.style.display = "block";
        i.style.display = "block";
    } 
}

function showMenu2Player() {
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

function showMenu3Player() {
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

function showMenu4Player() {
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