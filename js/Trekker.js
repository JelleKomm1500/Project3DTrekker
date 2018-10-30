function Trekker() {
    console.log("asdsadtrekkerrr");
    var boxgroep = new THREE.Group();

        var CollisionBox = new Physijs.BoxMesh(
            new THREE.BoxGeometry(10, 10, 10),
            new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity:1 }), 1
    );
   
        LoadOBJModel("objects/trekker/", "Tractor.obj", "objects/trekker/", "Tractor.mtl", (mesh) => {
            mesh.rotation.set(0, 3.14, 0)
            mesh.position.y = -5;
            CollisionBox.add(mesh);

        })

    boxgroep.add(CollisionBox);
   
    return CollisionBox;
        
    
    
}

