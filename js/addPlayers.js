function addPlayers() {
    var x = document.getElementById("minus");

    if (x.style.display === "none") {
        x.style.display = "block";
    }

    var playerClass = document.getElementById("playerClass");
    var clone = playerClass.cloneNode(true);

    document.getElementById("addPlayerCard").appendChild(clone);
}