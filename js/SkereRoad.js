function SkereRoad(renderer) {
    var geometry = new THREE.PlaneGeometry(1000, 1000);

    var wegTexture = new THREE.TextureLoader().load("textures/plane/road.png");
    wegTexture.anisotropy = renderer.getMaxAnisotropy();
    var material = new THREE.MeshBasicMaterial({ map: wegTexture, side: THREE.DoubleSide });
    material.transparent = true;
    var road = new THREE.Mesh(geometry, material);
    road.rotateX(- Math.PI / 2);
    road.position.y += 0.3;
    return road;
}