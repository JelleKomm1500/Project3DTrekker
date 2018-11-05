function CreatePlayerText(naam) {
    var loader = new THREE.FontLoader();
    var groep = new THREE.Group();

    loader.load('fonts/CloseAndOpen.js', function (font) {

        var textGeometry = new THREE.TextGeometry(naam, {

            font: font,

            size: 5,
            height: 0.2,
            curveSegments: 12,
            

        });

        var textMaterial = new THREE.MeshPhongMaterial(
            { color: 0xffffff, specular: 0xffffff }
        );

        var mesh = new THREE.Mesh(textGeometry, textMaterial);
        mesh.position.set(-15, 10, 0);
        groep.add(mesh);
    });   
    return groep;

}