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