function Trekker() {
    Trekkers = new THREE.Group();

    LoadOBJModel("objects/trekker/", "Tractor.obj", "objects/trekker/", "Tractor.mtl", (mesh) => {
        mesh.rotation.set(3.14, 0, 0);
        mesh.position.set(0, 10, 0);
        Trekkers.add(mesh);
    })
    return Trekkers;
}