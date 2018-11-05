function Scoreboard() {

    var tweedArray = new Array();

    //Deze moet je eerst callen bij het inladen van het spel zodat de 2darray gemaakt word.
    this.LoadPlayers = function (trekkers) {
        for (var i = 0; i < (trekkers.length); i++) {
            var name = trekkers[i].GetName();
            //trekkers[i].loadOthers(trekkers);
            var eendArray = [name, 3];
            tweedArray.push(eendArray);
        }
    }

    //Je kan deze callen met de naam van een speler om die guy +100 te geven.
    this.UpdateScore = function (name) {
        for (var i = 0; i < (tweedArray.length); i++) {
            var eendArray = tweedArray[i];
            if (eendArray[0] == name) {
                eendArray[1] -= 1;
                return eendArray[1];
            }
        }
    }

    //this.CheckLives = function (name) {
    //    for (var i = 0; i < (tweedArray.length); i++) {
    //        var eendArray = tweedArray[i];
    //        if (eendArray[0] == name) {
    //            return eendArray[1];
    //        }
    //    }
    //}

    this.DrawScoreboard = function (tijd) {
        var scoreboardstring = "Tijd:" + tijd + " ";
        var scoregroep = new THREE.Group();
        for (var i = 0; i < (tweedArray.length); i++) {
            var eendArray = tweedArray[i];
            var naam = eendArray[0];
            var score = eendArray[1].toString();
            var deelstring = naam + ":" + score + " ";
            scoreboardstring += deelstring;
        }

        var loader = new THREE.FontLoader();
        loader.load('fonts/CloseAndOpen.js', function (font) {
            var textMaterial = new THREE.MeshPhongMaterial(
                { color: ("rgb(255, 221, 0)"), specular: 0xffffff }
            );

            var textGeometry = new THREE.TextGeometry(scoreboardstring, {
                font: font,
                size: 20,
                height: 0.2,
                curveSegments: 12,
            }); 

            var textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.position.set(-660, 450, -1200);
            scoregroep.add(textMesh);
        });
        return scoregroep;
    }
}