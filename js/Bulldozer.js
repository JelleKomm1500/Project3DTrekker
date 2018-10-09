function Bulldozer() {
    var bullGroup = new THREE.Group();

    LoadOBJModel("objects/trekker/", "Tractor.obj", "objects/trekker/", "Tractor.mtl", (mesh) => {
        //mesh.children[0].material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        return mesh;
    })
}