function RetrieveSettings() {
    var arrPlayerSettings = new Array();
    var vehicle = document.querySelectorAll(".vehicle:checked");
    var playername = document.querySelectorAll(".playername");
    var accelerate = document.querySelectorAll(".accelerate");
    var brake = document.querySelectorAll(".brake");
    var left = document.querySelectorAll(".left");
    var right = document.querySelectorAll(".right");

    for (var i = 0; i < playername.length; i++) { 
        x = vehicle[i].value;
        if (x.charAt(0) === "T") {
            x = "tractor";
        }
        else if (x.charAt(0) === "B") {
            x = "bulldozer";
        }

        var arr = [x, playername[i], accelerate[i], brake[i], left[i], right[i]];
        arrPlayerSettings.push(arr);
    }

    return arrPlayerSettings;
}