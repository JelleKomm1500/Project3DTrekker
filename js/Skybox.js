function CircleSkyBox() {
    var sphericalSkyboxGemotery = new THREE.SphereGeometry(675, 64, 64);
    var sphericalSkyboxMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/CircleSkybox/panorama.png"), side: THREE.DoubleSide });
    var sphericalSkybox = new THREE.Mesh(sphericalSkyboxGemotery, sphericalSkyboxMaterial);
    sphericalSkybox.rotateX(Math.PI / 75)
    sphericalSkybox.rotateZ(Math.PI / 275)
    return sphericalSkybox;
}