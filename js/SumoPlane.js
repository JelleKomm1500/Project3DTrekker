function SumoArena()
{
    var stoeptexture = new THREE.TextureLoader().load("textures/plane/grass1.jpg");
    //stoeptexture.anisotropy = renderer.getMaxAnisotropy();
    stoeptexture.wrapS = THREE.RepeatWrapping;
    stoeptexture.wrapT = THREE.RepeatWrapping;
    stoeptexture.repeat.set(750, 750);


    var ground_material = Physijs.createMaterial(
        new THREE.MeshBasicMaterial({ map: stoeptexture, side: THREE.DoubleSide }),
        .8, // high friction
        .4 // low restitution
    );

    var ground = new Physijs.BoxMesh(
        new THREE.BoxGeometry(200, 200, 10),
        //new THREE.PlaneGeometry(50, 50),
        ground_material,
        0 // mass
    );

    ground.rotateX(- Math.PI / 2);

    return ground;
    

}