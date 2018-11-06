function Tractor(playername) {
    var CollisionBox = new Physijs.SphereMesh(
        new THREE.SphereGeometry(6, 40, 40),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );


    var CollisionBox2 = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry (4, 4, 2 , 24),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: true, opacity: 0 }), 1
    );

    CollisionBox2.rotation.set(0, 0, 1.57);

    var CollisionBox3 = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(4, 4, 2, 24),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: true, opacity: 0 }), 1
    );

    CollisionBox3.rotation.set(0, 0, 1.57);

    CollisionBox2.position.y = -4.3;
    CollisionBox2.position.z = -10.4;
    CollisionBox2.position.x = -6;

    CollisionBox3.position.y = -4.3;
    CollisionBox3.position.z = -10.4;
    CollisionBox3.position.x = 6;


    CollisionBox.add(CollisionBox2);
    CollisionBox.add(CollisionBox3);


    var CollisionBox4 = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(8,8, 4, 24),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: true, opacity: 0 }), 1
    );

    var CollisionBox5 = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(8, 8, 4, 24),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: true, opacity: 0 }), 1
    );

    CollisionBox4.position.y = -0.8;
    CollisionBox4.position.z = 10;
    CollisionBox4.position.x = -6;
    CollisionBox4.rotation.set(0, 0, 1.57);


    CollisionBox5.position.y = -0.8;
    CollisionBox5.position.z = 10;
    CollisionBox5.position.x = 6;
    CollisionBox5.rotation.set(0, 0, 1.57);

    CollisionBox.add(CollisionBox4);
    CollisionBox.add(CollisionBox5);


    var CollisionBox6 = new Physijs.SphereMesh(
        new THREE.SphereGeometry(6, 40, 40),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );

    var CollisionBox7 = new Physijs.SphereMesh(
        new THREE.SphereGeometry(6, 40, 40),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );
    var CollisionBox8 = new Physijs.SphereMesh(
        new THREE.SphereGeometry(6, 40, 40),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );

    CollisionBox6.position.z = -4;
    CollisionBox7.position.z = -8;
    CollisionBox8.position.z = 12;

    CollisionBox.add(CollisionBox6);
    CollisionBox.add(CollisionBox7);
    CollisionBox.add(CollisionBox8);

    LoadOBJModel("objects/trekker/", "Tractor.obj", "objects/trekker/", "Tractor.mtl", (mesh) => {
        mesh.rotation.set(0, 3.14, 0);
        mesh.position.set(0, -8, 0);
        mesh.scale.set(2, 2, 2);
        CollisionBox.add(mesh);
    })

    var text = CreatePlayerText(playername);

    CollisionBox.add(text);
    CollisionBox.scale.set(1, 1, 1);

    return CollisionBox;
}