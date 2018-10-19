function tires() {
    var Tires = new THREE.Group();

    LoadOBJModel("objects/tires/", "tires.obj", "objects/tires/", "tires.mtl", (mesh) => {
        mesh.scale.set(10, 10, 10);
        mesh.rotation.set(0, 3.14, 0)
        Tires.add(mesh);
    })
    return Tires;
}