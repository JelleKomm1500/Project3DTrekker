function CubeSkybox() {
    var geometry = new THREE.CubeGeometry(10000, 10000, 10000);
    var CubeMaterials =
        [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/CubeSkybox/front.jpg"), side: THREE.DoubleSide }
            ),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/CubeSkybox/back.jpg"), side: THREE.DoubleSide }
            ),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/CubeSkybox/up.jpg"), side: THREE.DoubleSide }
            ),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/CubeSkybox/down.jpg"), side: THREE.DoubleSide }
            ),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/CubeSkybox/right.jpg"), side: THREE.DoubleSide }
            ),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/CubeSkybox/left.jpg"), side: THREE.DoubleSide }
            )
        ];

    var CubeMaterial = new THREE.MeshFaceMaterial(CubeMaterials);
    var cube = new THREE.Mesh(geometry, CubeMaterial);
    return cube;


}
