var audio = new Audio("music/Johnny_Cash_-_General_Lee.mp3");

/**
 *Zet de muziek aan en hide het mute icoon en laat de play icon zien
 *
 */
function PlayMusic() {
    var x = document.getElementById("play");
    var y = document.getElementById("mute");

    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }

    //speelt de audio variable af
    audio.play();

}

/**
 * Deze functie is voor het hoofdmenu. 
 * Pauzeert de muzie en showt de mute button en hide de play button
 */
function StopMusic() {
    var x = document.getElementById("play");
    var y = document.getElementById("mute");
    if (y.style.display === "block") {
        y.style.display = "none";
        x.style.display = "block";
    } else {
        y.style.display = "block";
        x.style.display = "none";
    }

    audio.pause();
}

/**
 * Als de game start wordt de muziek gestopt.
 *  De mute en play button worden verborgen.
 */
function PauseMusic() {
    var x = document.getElementById("play");
    var y = document.getElementById("mute");
    if (y.style.display === "block" || x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none";
    }
    audio.pause();
}
