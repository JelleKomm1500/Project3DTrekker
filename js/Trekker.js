function Trekker(keuze) {
    console.log("asdsadtrekkerrr");
    var boxgroep = new THREE.Group();

    if (keuze == "box")
    {
        var CollisionBox = new Physijs.BoxMesh(
            new THREE.BoxGeometry(5, 5, 5),
            new THREE.MeshBasicMaterial({ color: 0xa7f442, transparent: true, opacity:0 }), 1
        );


        LoadOBJModel("objects/trekker/", "Tractor.obj", "objects/trekker/", "Tractor.mtl", (mesh) => {
            mesh.rotation.set(0, 3.14, 0)

            CollisionBox.add(mesh);

        })

        boxgroep.add(CollisionBox);

        return CollisionBox;
        
    }
    
}

function CollisionBox()
{

    var CollisionBox = new Physijs.BoxMesh(
        new THREE.BoxGeometry(10, 15, 15),
        new THREE.MeshBasicMaterial({ color: 0xa7f442 }), 1000
    );

    CollisionBox.visible = true;
    CollisionBox.__dirtyPosition = true;

    CollisionBox.position.y = 20;

    return CollisionBox;
    
}

function Mix(keuze)
{
    //box en auto los opslaan in een array zodat we die later afzonderlijk kunnen bewerken

    var groep = new THREE.Group();
  
    if (keuze == 1) {
        var auto = Trekker();
        var box = CollisionBox();

        groep.add(auto);
        groep.add(box);
        return groep;

    }

    //2
    else
    {
        var box = CollisionBox();
        return box;
    }



}