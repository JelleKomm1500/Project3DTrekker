function Arena()
{
    var arenagroep = new THREE.Group();
    var stoeptexture = new THREE.TextureLoader().load("textures/concrete.jpg");
   // stoeptexture.anisotropy = renderer.getMaxAnisotropy();
    stoeptexture.wrapS = THREE.RepeatWrapping;
    stoeptexture.wrapT = THREE.RepeatWrapping;
    stoeptexture.repeat.set(5, 5);


    for (var i = 0; i < 4; i++) {
 
        var geometry = new THREE.BoxGeometry(300, 100, 10);
        var material = new THREE.MeshBasicMaterial({ map: stoeptexture, side: THREE.DoubleSide });
        var plane = new Physijs.BoxMesh(geometry, material);
        //links en rechts

        if (i == 0) //voorkant
        {
           
            arenagroep.add(plane);

        }
        //zijkant
        if (i == 1)
        {
            plane.rotation.set(0, 1.57, 0);
            plane.position.set(150, 0, 150);
            arenagroep.add(plane);
        }

        if (i == 2)
        {
            plane.position.set(0, 0, 300);
            arenagroep.add(plane);

        }

        if (i == 3) 
        {
            plane.rotation.set(0, 1.57, 0);
            plane.position.set(-150, 0, 150);
            arenagroep.add(plane);


        }
    }
    return arenagroep; 




    

}