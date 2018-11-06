function ZwareTrekker(spelernaam) {
    Trekkers = new THREE.Group();
    //nog cylinderwielen proberen?
    var CollisionBox = new Physijs.BoxMesh(
        new THREE.BoxGeometry(45, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );


    var CollisionBox2 = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(4, 4, 2, 24),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: true, opacity: 0 }), 1
    );

    var voorkant = new Physijs.BoxMesh(
        new THREE.BoxGeometry(10, 10, 30),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );
    voorkant.position.set(0, 0, -15);
    voorkant.rotation.set(0, 1.57, 0);
   CollisionBox.add(voorkant);


    var achterkant = new Physijs.BoxMesh(
        new THREE.BoxGeometry(10, 10, 30),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );

    achterkant.position.set(0, 0, 35);
    achterkant.rotation.set(0, 1.57, 0);
    CollisionBox.add(achterkant);

    var BinnenKant = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(20, 20, 20, 50),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: true, opacity: 0 }), 1
    );

    BinnenKant.position.set(0, 0, 10);

    CollisionBox.add(BinnenKant);

    LoadOBJModel("objects/bulldozer/", "Bulldozer.obj", "objects/bulldozer/", "Bulldozer.mtl", (mesh) => {
        mesh.rotation.set(0, 1.57, 0);
        mesh.position.set(0, 5, 0);
        mesh.scale.set(0.2, 0.2, 0.2);
        CollisionBox.add(mesh);
    })

    var text = CreatePlayerText(spelernaam);
    text.scale.set(2, 2, 2);
    text.position.set(0, 5, 0);

    CollisionBox.add(text);
    CollisionBox.scale.set(1, 1, 1);

    return CollisionBox;
}