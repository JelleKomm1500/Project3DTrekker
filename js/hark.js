function hark() {
    var Hark = new THREE.Group();

    LoadOBJModel("objects/props/", "hark.obj", "objects/props/", "hark.mtl", (mesh) => {
        mesh.scale.set(10, 10, 10);
        mesh.rotation.set(0, 3.14, 0)
        mesh.position.set(0, 6, 0);
        Hark.add(mesh);
    })
    return Hark;
}