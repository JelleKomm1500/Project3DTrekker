function Fence() {
    var Fence = new THREE.Group();

    LoadOBJModel("objects/chalet/", "CUPIC_CHALET.obj", "objects/chalet/", "CUPIC_CHALET.mtl", (mesh) => {
        mesh.rotation.set(0, 3.14, 0);
        mesh.scale.set(0.5, 0.5, 0.5);
        Fence.add(mesh);
    })
    return Fence;
}