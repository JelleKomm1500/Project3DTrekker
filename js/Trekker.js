function Trekker() {
    Trekkers = new THREE.Group();
    //nog cylinderwielen proberen?
    var CollisionBox = new Physijs.SphereMesh(
        new THREE.SphereGeometry(3, 20, 20),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: false, opacity: 0 }), 1
    );


    var CollisionBox2 = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry (2, 2, 1 , 12),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: false, opacity: 0 }), 1
    );

    CollisionBox2.rotation.set(0, 0, 190);

    var CollisionBox3 = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(2, 2, 1, 12),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: false, opacity: 0 }), 1
    );

    CollisionBox3.rotation.set(0, 0, 190);

    CollisionBox2.position.y = -2.15;
    CollisionBox2.position.z = -5.2;
    CollisionBox2.position.x = -3;

    CollisionBox3.position.y = -2.15;
    CollisionBox3.position.z = -5.2;
    CollisionBox3.position.x = 3;


    CollisionBox.add(CollisionBox2);
    CollisionBox.add(CollisionBox3);


    var CollisionBox4 = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(4,4, 2, 12),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: false, opacity: 0 }), 1
    );

    var CollisionBox5 = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(4, 4, 2, 12),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: false, opacity: 0 }), 1
    );

    CollisionBox4.position.y = -0.4;
    CollisionBox4.position.z = 5;
    CollisionBox4.position.x = -3;
    CollisionBox4.rotation.set(0, 0, 190);


    CollisionBox5.position.y = -0.4;
    CollisionBox5.position.z = 5;
    CollisionBox5.position.x = 3;
    CollisionBox5.rotation.set(0, 0, 190);

    CollisionBox.add(CollisionBox4);
    CollisionBox.add(CollisionBox5);


    var CollisionBox6 = new Physijs.SphereMesh(
        new THREE.SphereGeometry(3, 20, 20),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: false, opacity: 0 }), 1
    );

    var CollisionBox7 = new Physijs.SphereMesh(
        new THREE.SphereGeometry(3, 20, 20),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: false, opacity: 0 }), 1
    );

    CollisionBox6.position.z = -2;
    CollisionBox7.position.z = -4;

    CollisionBox.add(CollisionBox6);
    CollisionBox.add(CollisionBox7);

    LoadOBJModel("objects/trekker/", "Tractor.obj", "objects/trekker/", "Tractor.mtl", (mesh) => {
        mesh.rotation.set(0, 3.14, 0);
        mesh.position.set(0, -4, 0);
        CollisionBox.add(mesh);
    })
    return CollisionBox;
}