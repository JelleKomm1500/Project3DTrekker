function Plane() {
    var planegroup = new THREE.Group();
    var geometry = new THREE.PlaneGeometry(2000, 2000, 2000);

    var stoeptexture = new THREE.TextureLoader().load("textures/plane/grass1.jpg");
    stoeptexture.wrapS = THREE.RepeatWrapping;
    stoeptexture.wrapT = THREE.RepeatWrapping;
    stoeptexture.repeat.set(40, 40);

    var material = new THREE.MeshBasicMaterial({ map: stoeptexture, side: THREE.DoubleSide });

    var plane = new THREE.Mesh(geometry, material), 0;
    plane.rotateX(- Math.PI / 2);

    planegroup.add(plane);
    return planegroup;
}