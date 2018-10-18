﻿function Plane() {
    var geometry = new THREE.PlaneGeometry(19999, 19999, 19999);

    var stoeptexture = new THREE.TextureLoader().load("textures/plane/grass1.jpg");
    stoeptexture.wrapS = THREE.RepeatWrapping;
    stoeptexture.wrapT = THREE.RepeatWrapping;
    stoeptexture.repeat.set(750, 750);

    var material = new THREE.MeshBasicMaterial({ map: stoeptexture, side: THREE.DoubleSide });

    var plane = new THREE.Mesh(geometry, material);
    plane.rotateX(- Math.PI / 2);
    return plane;
}