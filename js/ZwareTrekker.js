function ZwareTrekker(spelernaam) {
    Trekkers = new THREE.Group();
    //nog cylinderwielen proberen?
    var CollisionBox = new Physijs.BoxMesh(
        new THREE.BoxGeometry(45, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: false, opacity: 0 }), 1
    );


    var CollisionBox2 = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(4, 4, 2, 24),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: false, opacity: 1 }), 1
    );

    var voorkant = new Physijs.BoxMesh(
        new THREE.BoxGeometry(10, 10, 30),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: false, opacity: 0 }), 1
    );
    voorkant.position.set(-15, 0, 0);

   CollisionBox.add(voorkant);


    var achterkant = new Physijs.BoxMesh(
        new THREE.BoxGeometry(10, 10, 30),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: false, opacity: 0 }), 1
    );

    achterkant.position.set(40, 0, 0);

    CollisionBox.add(achterkant);

    var BinnenKant = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(20, 20, 20, 50),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: false, opacity: 1 }), 1
    );

    BinnenKant.position.set(15, 0, 0);

    CollisionBox.add(BinnenKant);

    LoadOBJModel("objects/bulldozer/", "Bulldozer.obj", "objects/bulldozer/", "Bulldozer.mtl", (mesh) => {
        mesh.position.set(0, 0, 0);
        mesh.scale.set(0.2, 0.2, 0.2);
        CollisionBox.add(mesh);
    })

    var text = CreatePlayerText(spelernaam);

    CollisionBox.add(text);
    CollisionBox.scale.set(1, 1, 1);
    CollisionBox.rotation.set(0, 1.57, 0);

    return CollisionBox;
}