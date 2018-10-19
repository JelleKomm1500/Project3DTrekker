function Trekker() {
    var Trekkers = new THREE.Group();

    LoadOBJModel("objects/trekker/", "Tractor.obj", "objects/trekker/", "Tractor.mtl", (mesh) => {
        mesh.rotation.set(0,0,0)
        Trekkers.add(mesh);
    })
    return Trekkers;
}