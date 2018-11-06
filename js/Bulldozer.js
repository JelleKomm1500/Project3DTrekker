/**
 *Deze functie bouwt de hitbox van de bulldozer op. Ook laadt hij de bijpassende obj in en voegt hij deze toe aan de hitbox. 
 * @param {string} playername De naam van de speler die deze bulldozer bestuurt.
 * Deze naam word via de CreatePlayerText functie boven de bulldozer gezet.
 * @returns {Physijs.BoxMesh} Alle hitboxen, de obj en de playertext toegevoegd aan CollisionBox.
 */
function Bulldozer(playername) {
    var collisionbox = new Physijs.BoxMesh(
        new THREE.BoxGeometry(45, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );

    var voorkant = new Physijs.BoxMesh(
        new THREE.BoxGeometry(10, 10, 30),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );
    voorkant.position.set(0, 0, -15);
    voorkant.rotation.set(0, 1.57, 0);
    collisionbox.add(voorkant);


    var back = new Physijs.BoxMesh(
        new THREE.BoxGeometry(10, 10, 30),
        new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity: 0 }), 1
    );

    back.position.set(0, 0, 35);
    back.rotation.set(0, 1.57, 0);
    collisionbox.add(back);

    var inside = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(20, 20, 20, 50),
        new THREE.MeshBasicMaterial({ color: 0xa3272, transparent: true, opacity: 0 }), 1
    );

    inside.position.set(0, 0, 10);

    collisionbox.add(inside);

    LoadOBJModel("objects/bulldozer/", "Bulldozer.obj", "objects/bulldozer/", "Bulldozer.mtl", (mesh) => {
        mesh.rotation.set(0, 1.57, 0);
        mesh.position.set(0, 5, 0);
        mesh.scale.set(0.2, 0.2, 0.2);
        collisionbox.add(mesh);
    })

    var text = CreatePlayerText(playername);
    text.scale.set(2, 2, 2);
    text.position.set(0, 5, 0);

    collisionbox.add(text);
    collisionbox.scale.set(1, 1, 1);

    return collisionbox;
}