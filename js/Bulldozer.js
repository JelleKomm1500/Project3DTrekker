function Bulldozer(playername) {
    var CollisionBox = new Physijs.BoxMesh(
        new THREE.BoxGeometry(45, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );

    var voorkant = new Physijs.BoxMesh(
        new THREE.BoxGeometry(10, 10, 30),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );
    voorkant.position.set(0, 0, -15);
    voorkant.rotation.set(0, 1.57, 0);
   CollisionBox.add(voorkant);


    var back = new Physijs.BoxMesh(
        new THREE.BoxGeometry(10, 10, 30),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );

    back.position.set(0, 0, 35);
    back.rotation.set(0, 1.57, 0);
    CollisionBox.add(back);

    var inside = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(20, 20, 20, 50),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: true, opacity: 0 }), 1
    );

    inside.position.set(0, 0, 10);

    CollisionBox.add(inside);

    LoadOBJModel("objects/bulldozer/", "Bulldozer.obj", "objects/bulldozer/", "Bulldozer.mtl", (mesh) => {
        mesh.rotation.set(0, 1.57, 0);
        mesh.position.set(0, 5, 0);
        mesh.scale.set(0.2, 0.2, 0.2);
        CollisionBox.add(mesh);
    })

    var text = CreatePlayerText(playername);
    text.scale.set(2, 2, 2);
    text.position.set(0, 5, 0);

    CollisionBox.add(text);
    CollisionBox.scale.set(1, 1, 1);

    return CollisionBox;
}