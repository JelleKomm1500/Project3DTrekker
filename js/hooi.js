function hooi() {
    var Hooi = new THREE.Group();

    LoadOBJModel("objects/props/", "hooi.obj", "objects/props/", "hooi.mtl", (mesh) => {
        mesh.scale.set(10, 10, 10);
        mesh.rotation.set(0, 3.14, 0)
        mesh.position.set(0, 6, 0);
        Hooi.add(mesh);
    })
    return Hooi;
}