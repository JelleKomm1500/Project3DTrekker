function ColissionObject() {
    var TestObject = new THREE.Object3D();

    LoadOBJModel("objects/fence/", "cube.obj", "objects/fence/", "cube.mtl", (mesh) => {
        mesh.rotation.set(0, 3.14, 0)

        TestObject.add(mesh);
    })
    return TestObject;
}