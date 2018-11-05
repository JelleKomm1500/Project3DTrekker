function rotsfunctie(x, y, z) {
    var cubeMaterials = [
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/stone.jpg"), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/stone.jpg"), side: THREE.DoubleSide }), //RIGHT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/stone.jpg"), side: THREE.DoubleSide }), //TOP
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/stone.jpg"), side: THREE.DoubleSide }), //BOTTOM
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/stone.jpg"), side: THREE.DoubleSide }), //FRONT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/stone.jpg"), side: THREE.DoubleSide }), //BACK
    ];

    var geo = new THREE.BoxGeometry(30, 30, 30);
    var rotstex = new THREE.Mesh(geo, cubeMaterials);

    var rots = new Physijs.BoxMesh(
        new THREE.BoxGeometry(30, 30, 30),
        new THREE.MeshFaceMaterial({ color: 0xa7f442, transparent: true, opacity: 1 }), 1
    );
    rots.add(rotstex);
    rots.position.x = x;
    rots.position.z = z;
    rots.position.y = y;
    return rots;
}