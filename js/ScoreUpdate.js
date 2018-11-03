function ScoreUpdate(speler, score) {
    var loader = new THREE.FontLoader();
    var scoregroep = new THREE.Group();
    var speler1score;
    var speler2score;
    loader.load('fonts/CloseAndOpen.js', function (font) {



        var textMaterial = new THREE.MeshPhongMaterial(
            { color: 0xffffff, specular: 0xffffff }
        );

        if (speler == "1") {
            speler1score = score;
            var textGeometry = new THREE.TextGeometry("Speler 1: " + speler1score, {
                font: font,
                size: 5,
                height: 0.2,
                curveSegments: 12,
            });  
           var speler1mesh = new THREE.Mesh(textGeometry, textMaterial);
            speler1mesh.position.set(0, 75, -200);
            scoregroep.add(speler1mesh);  
        }

        else if (speler == "2") {
            speler2score = score;   
            var textGeometry2 = new THREE.TextGeometry("Speler 2: " + speler2score, {
                font: font,
                size: 5,
                height: 2,
                curveSegments: 12,
            });
           var speler2mesh = new THREE.Mesh(textGeometry2, textMaterial);
            speler2mesh.position.set(0, 100, -200);
            scoregroep.add(speler2mesh);
        } 

    });
    return scoregroep;
}