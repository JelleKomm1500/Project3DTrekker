
function CircleSkyBox() {
    var sphericalSkyboxGemotery = new THREE.SphereGeometry(19999, 256, 256);
    var sphericalSkyboxMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/CircleSkybox/panorama3.png"), side: THREE.DoubleSide });
    var sphericalSkybox = new THREE.Mesh(sphericalSkyboxGemotery, sphericalSkyboxMaterial);
    sphericalSkybox.rotateX(Math.PI / 75)
    sphericalSkybox.rotateZ(Math.PI / 275)
    return sphericalSkybox;
}
