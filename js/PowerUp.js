function PowerBoxFunctie(type) {

    var texturepath;

    if (type == 0) {

        texturepath = "img/textures/crateLife.png";

    }
    else if (type == 1) {

        texturepath = "img/textures/crateSpeed.png";

    }
    else if (type == 2) {

        texturepath = "img/textures/crateSpeed.png";

    }

    var cubeMaterials = [
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(texturepath), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(texturepath), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(texturepath), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(texturepath), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(texturepath), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(texturepath), side: THREE.DoubleSide }), //LEFT
    ];

    cubeMaterials.map.anisotropy = 8;

    var geo = new THREE.BoxGeometry(16, 16, 16);
    var rotstex = new THREE.Mesh(geo, cubeMaterials);

    var rots = new Physijs.BoxMesh(
        new THREE.BoxGeometry(16, 16, 16),
        new THREE.MeshFaceMaterial({ color: 0xa7f442, transparent: true, opacity: 1 }), 1
    );
    rots.add(rotstex);
 


   




    return rots;
}