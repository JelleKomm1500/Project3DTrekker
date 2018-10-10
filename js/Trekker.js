function Trekker() {
    var Trekkers = new THREE.Group();

    LoadOBJModel("objects/trekker/", "Tractor.obj", "objects/trekker/", "Tractor.mtl", (mesh) => {
        mesh.rotation.y = -4.7;
        Trekkers.add(mesh);
    })
    return Trekkers;
}