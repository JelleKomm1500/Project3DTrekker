/**
 * Houdt bij hoeveel mensen spelen en wat hun scores zijn. Kan dit en de huidige tijd op het scherm afdrukken.
 */
function Scoreboard() {

    var tweedArray = new Array();

    /**
 * Gaat door een meegegeven 2D-array met tractors heen en stopt hun namen en max levens in de lokale array(tweedarray).
 * @param {array} trekkers De array met tractors die ingeladen moet worden.
 */
    this.LoadPlayers = function (tractors) {
        for (var i = 0; i < (tractors.length); i++) {
            var name = tractors[i].GetName();
            var eendArray = [name, 3];
            tweedArray.push(eendArray);
        }
    }

    /**
 * Haalt één leven weg van de meegegeven speler.
 * @param {string} name De naam van de speler waarvan de score geupdated moet worden.
 */
    this.UpdateScore = function (name) {
        for (var i = 0; i < (tweedArray.length); i++) {
            var eendArray = tweedArray[i];
            if (eendArray[0] == name) {
                eendArray[1] -= 1;
                return eendArray[1];
            }
        }
    }

    /**
 * Geeft één leven aan de meegegeven speler. En geeft ook aan hoeveel levens die persoon nu heeft.
 * @param {string} name De naam van de speler waarvan de score geupdated moet worden.
 * @returns {number} Het aantal levens van de meegegeven speler.
 */
    this.GiveLife = function (name) {
        for (var i = 0; i < (tweedArray.length); i++) {
            var eendArray = tweedArray[i];
            if (eendArray[0] == name) {
                eendArray[1] += 1;
                return eendArray[1];
            }
        }
    }

    /**
 * Gaat door de lokale array(tweedarray) heen en zoekt de hoogste score en de gene die die score heeft.
 * @returns {string} winnaar De naam van de winnaar.
 */
    this.GetHighestScore = function () {
        var highscore = 0;
        var winnaar;
        for (var i = 0; i < (tweedArray.length); i++) {
            var eendArray = tweedArray[i];
            if (eendArray[1] > highscore) {
                highscore = eendArray[1];
            }
        }

        for (var i = 0; i < (tweedArray.length); i++) {
            var eendArray = tweedArray[i];
            if (eendArray[1] == highscore) {
                winnaar = eendArray[0];
            }
        }
        return winnaar;
    }

    /**
 * Drukt de huidige tijd en alle huidige scores af.
 * @param {number} tijd Het huidige aantal seconden sinds het spel is begonnen.
 * @returns {THREE.Group} Een groep met alle textmeshes erin.
 */
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