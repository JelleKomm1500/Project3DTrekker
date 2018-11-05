function RemovePlayer() {
    var select = document.getElementById("addPlayerCard");
    select.removeChild(select.lastChild);

    if (select.childElementCount === 1) {
        var x = document.getElementById("minus");
        x.style.display = "none";
    }
}