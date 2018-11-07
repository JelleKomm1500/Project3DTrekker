var audio = new Audio("music/Johnny_Cash_-_General_Lee.mp3");

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

    audio.play();

}

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

function PauseMusic() {
    var x = document.getElementById("play");
    var y = document.getElementById("mute");
    if (y.style.display === "block" || x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none";
    }
    audio.pause();
}
