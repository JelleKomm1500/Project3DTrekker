function PowerBoxFunctie(type) {


    if (type == "life") {

        alert("sadsad");

    }

    var cubeMaterials = [
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/crateLife.png"), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/crateLife.png"), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/crateLife.png"), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/crateLife.png"), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/crateLife.png"), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/crateLife.png"), side: THREE.DoubleSide }), //LEFT
    ];

    var geo = new THREE.BoxGeometry(20, 20, 20);
    var rotstex = new THREE.Mesh(geo, cubeMaterials);

    var rots = new Physijs.BoxMesh(
        new THREE.BoxGeometry(20, 20, 20),
        new THREE.MeshFaceMaterial({ color: 0xa7f442, transparent: true, opacity: 1 }), 1
    );
    rots.add(rotstex);
 


   




    return rots;
}