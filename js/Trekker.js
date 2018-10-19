﻿function Trekker() {
    var Trekkers = new THREE.Object3D();

    LoadOBJModel("objects/trekker/", "Tractor.obj", "objects/trekker/", "Tractor.mtl", (mesh) => {
        mesh.rotation.set(0, 3.14, 0)
        Trekkers.add(mesh);
    })
    return Trekkers;
}