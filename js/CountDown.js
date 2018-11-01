function CountDown() {
    var textgroep = new THREE.Group();
    var loader = new THREE.FontLoader();
    loader.load('fonts/Bad_Signal_Regular.js', function (font) {

        var textGeometry = new THREE.TextGeometry("3", {

            font: font,

            size: 50,
            height: 10,
            curveSegments: 12,

            bevelThickness: 1,
            bevelSize: 1,
            bevelEnabled: true

        });

        var textMaterial = new THREE.MeshPhongMaterial(
            { color: 0xff0000, specular: 0xffffff }
        );

        var mesh = new THREE.Mesh(textGeometry, textMaterial);
        textgroep.add(mesh);

    }); 

    return textgroep;


}