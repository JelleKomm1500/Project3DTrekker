/**
 * Haalt het type wagen, de naam en de controls per speler op uit de form in index. 
 * Deze worden in een array gepusht, waarna de array per persoon weer in andere array wordt gepusht. 
 * Dit maakt een 2d array met alle informatie per speler, die weer wordt gereturned.
 *@return {array} Returned een 2d array met informatie per spel, zodat het in een andere file gebruikt kan worden.
 */
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

        var arr = [x, playername[i].value, accelerate[i].value, brake[i].value, left[i].value, right[i].value];
        arrPlayerSettings.push(arr);
    }

    return arrPlayerSettings;
}