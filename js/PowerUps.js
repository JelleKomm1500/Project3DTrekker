function PowerUps(x,y,z, s){
    var cubeMaterials = [
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/PowerUpBoxes/crateWeight.png"), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/PowerUpBoxes/crateWeight.png"), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/PowerUpBoxes/crate.jpg"), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/PowerUpBoxes/crateWeight.png"), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/PowerUpBoxes/crateWeight.png"), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("img/textures/PowerUpBoxes/crateWeight.png"), side: THREE.DoubleSide }) //LEFT
    ];

    var geometry = new THREE.BoxGeometry(s, s, s);
    var boxtex = new THREE.Mesh(geometry, cubeMaterials);
    var test = 1;

    var rots = new Physijs.BoxMesh(
        new THREE.BoxGeometry(s, s, s),
        new THREE.MeshFaceMaterial({ color: 0xa7f442, transparent: true, opacity: test}), 0

    );


    function Check() {
        

    }

    


    rots.position.y = 25;

    rots.add(boxtex);


    return rots;
    
}

