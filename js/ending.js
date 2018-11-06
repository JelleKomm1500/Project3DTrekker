/**
 * Bouwt een THREE.Group op bestaande uit meshes van de regels. Deze regels geven aan wie er heeft gewonnen en wat er hierna gaat gebeuren.
 * Dit werkt met de THREE.FontLoader.
 * @param {string} winner De naam van de winnaar.
 * @returns {THREE.Group} Een group met de meshes van de regels.
 */ 
function Ending(winner) {

    var scoregroep = new THREE.Group();
    var scoreboardstring;
    scoreboardstring = winner + " heeft gewonnen! ";
    var timestring = "Na 10 seconden word je teruggestuurd naar het hoofdmenu."
        var loader = new THREE.FontLoader();
        loader.load('fonts/CloseAndOpen.js', function (font) {
            var textMaterial = new THREE.MeshPhongMaterial(
                { color: ("rgb(255, 221, 0)"), specular: 0xffffff }
            );
            var regel1Geometry = new THREE.TextGeometry(scoreboardstring, {
                font: font,
                size: 20,
                height: 0.2,
                curveSegments: 12,
            });
            var regel2Geometry = new THREE.TextGeometry(timestring, {
                font: font,
                size: 20,
                height: 0.2,
                curveSegments: 12,
            });

            var regel1Mesh = new THREE.Mesh(regel1Geometry, textMaterial);
            var regel2Mesh = new THREE.Mesh(regel2Geometry, textMaterial);
            regel1Mesh.position.set(-660, 450, -1200);
            regel2Mesh.position.set(-660, 400, -1200);

            scoregroep.add(regel1Mesh);
            scoregroep.add(regel2Mesh);
        });
        return scoregroep;


}