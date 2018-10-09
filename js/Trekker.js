function Trekker() {
    var Trekkers = new THREE.Group();

    LoadOBJModel("objects/trekker/", "Tractor.obj", "objects/trekker/", "Tractor.mtl", (mesh) => {
        Trekkers.add(mesh)
    })
    return Trekkers;
}