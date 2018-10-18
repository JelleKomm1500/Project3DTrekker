function DikkeRoad() {

    var width = 100, height = 100, width_segments = 100, height_segments = 1;
    var geometry = new THREE.PlaneGeometry(width, height, width_segments, height_segments);

    for (var i = 0; i < geometry.vertices.length / 2; i++) {
        geometry.vertices[2 * i].z = Math.pow(2, i / 20);
        geometry.vertices[2 * i + 1].z = Math.pow(2, i / 20);
    }



    var stoeptexture = new THREE.TextureLoader().load("textures/plane/modder.png");
    stoeptexture.wrapS = THREE.RepeatWrapping;
    stoeptexture.wrapT = THREE.RepeatWrapping;
    stoeptexture.repeat.set(2, 2);

    var material = new THREE.MeshBasicMaterial({ map: stoeptexture, side: THREE.DoubleSide });
    material.doubleSided = true;

    var plane = new THREE.Mesh(geometry, material);
    plane.rotateX(- Math.PI / 2);
    plane.position.y += 20;
    return plane;
}