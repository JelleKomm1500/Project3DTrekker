function barn() {
    var Barn = new THREE.Group();

    LoadOBJModel("objects/props/", "barn.obj", "objects/props/", "barn.mtl", (mesh) => {
        mesh.scale.set(10, 10, 10);
        mesh.rotation.set(0, 3.14, 0)
        mesh.position.set(0, 6, 0);
        Barn.add(mesh);
    })
    return Barn;
}