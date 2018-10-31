function Arena()
{
    var ArenaBox = new Physijs.BoxMesh(
        new THREE.BoxGeometry(10, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 0
    );

    var arenagroep = new THREE.Group();
    var stoeptexture = new THREE.TextureLoader().load("textures/concrete.jpg");
   // stoeptexture.anisotropy = renderer.getMaxAnisotropy();
    stoeptexture.wrapS = THREE.RepeatWrapping;
    stoeptexture.wrapT = THREE.RepeatWrapping;
    stoeptexture.repeat.set(5, 5);


    for (var i = 0; i < 4; i++) {
 
        //var geometry = new THREE.BoxGeometry(300, 100, 10);
        //var material = new THREE.MeshBasicMaterial({ map: stoeptexture, side: THREE.DoubleSide });
        //var plane = new Physijs.BoxMesh(geometry, material);
        ////links en rechts

        var plane = new Physijs.BoxMesh(
            new THREE.CubeGeometry(1500, 100, 10),
            new THREE.MeshBasicMaterial({ map: stoeptexture, side: THREE.DoubleSide,  }), 1,
        );

        var plane2 = new Physijs.BoxMesh(
            new THREE.CubeGeometry(1000, 100, 10),
            new THREE.MeshBasicMaterial({ map: stoeptexture, side: THREE.DoubleSide }), 1,
        );


        var scheef = new Physijs.BoxMesh(
            new THREE.CubeGeometry(100, 100, 2),
            new THREE.MeshBasicMaterial({ map: stoeptexture, side: THREE.DoubleSide }), 1,
        );


        if (i == 0) //voorkant
        {
            plane.position.set(0, 0, -350);
            ArenaBox.add(plane);
        }
        //zijkant
        if (i == 1)
        {
            plane2.rotation.set(0, 1.57, 0);
            plane2.position.set(750, 0, 150);
            ArenaBox.add(plane2);
            scheef.rotation.y = 0.7853981634;
            scheef.position.set(700, 0 , 630);
            ArenaBox.add(scheef);

        }

        if (i == 2)
        {
            plane.position.set(0, 0, 650);
            ArenaBox.add(plane);

        }

        if (i == 3) 
        {
            plane2.rotation.set(0, 1.57, 0);
            plane2.position.set(-750, 0, 150);
            ArenaBox.add(plane2);


        }



    }
    return ArenaBox; 




    

}