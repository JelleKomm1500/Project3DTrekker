document.getElementById("startGame").onclick = function () {
    'use strict';

    Physijs.scripts.worker = 'js/physijs_worker.js';
    Physijs.scripts.ammo = 'ammo.js';
    var initScene, render, renderer, scene, camera, box, floor, conrtols, stats;
    var timer = new THREE.Clock();
    timer.start();

    var test = 0;
    var testpower;
    const Rotsen = new ObjectArray("rots");

    for (var i = 150; i > -150; i-=30) {
        for (var i2 = 10; i2 > -10; i2--) {
            Rotsen.Push((i2 * 30), -10, i);
        }
    }

    
    const Trekkers = new ObjectArray("trekker");
    Trekkers.Push("Speler1", 11, 1.01, "W", "A", "D", "S");
    Trekkers.Push("Speler2", 11, 1.01, "U", "H", "K", "J");

    const Scorebord = new Scoreboard();
    Scorebord.LoadPlayers(Trekkers.GetArray());


    var keyboard = new THREEx.KeyboardState();

    var Scoreafdruk = Scorebord.DrawScoreboard(timer.getElapsedTime());
    
    function hide() {
        var x = document.getElementById("wrapper");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    function init() {
        //Create scene
        scene = new Physijs.Scene;
        scene.setGravity(new THREE.Vector3(0, -250, 0));
        scene.add(CubeSkybox());
        //create camera view, scene and renderer
        var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 200000;
        camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        var controls = new THREE.OrbitControls(camera);
        camera.position.set(0, 150, 400);
        //camera.lookAt(scene.position);
        scene.add(camera);

        renderer = new THREE.WebGLRenderer({ antialias: false });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight + 5);
        document.body.appendChild(renderer.domElement);

       testpower = PowerUpObj("life");

        scene.add(testpower);




        //geen idee waarom maar door dit vallen de trekkers niet door de grond
        var test32 = new Physijs.BoxMesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshFaceMaterial({ color: 0xa3272, transparent: false, opacity: 0 }), 0
        );
        test32.position.x = 10000;
        scene.add(test32);

        window.addEventListener('resize', onWindowResize, false);

        var rArray = Rotsen.GetArray();
        for (var i = 0; i < (rArray.length); i++)
        {
            scene.add(rArray[i].GetModel());
            rArray[i].Fly();
        }

        var tArray = Trekkers.GetArray();
        for (var i = 0; i < (tArray.length); i++) {
            var car = tArray[i].GetModel();
            var i2 = i * 30;
            car.position.set(i2, 30, i2);
            car.addEventListener('collision', function (other_object, linear_velocity, angular_velocity) {


                if (other_object.id == PowerUpObj.GetModel()) {
                    
                    )


        })


            scene.add(car);            
        }

        scene.add(Light());

        
        camera.add(Scoreafdruk);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function RotsVal() {

        var array = Rotsen.GetArray();
        var random = Math.floor(Math.random() * array.length);
        if (array[random].CheckFlying()) {
            array[random].Fall();
        }
        else RotsVal();
        
    }

    function FindRots() {

        var array = Rotsen.GetArray();
        var random = Math.floor(Math.random() * array.length);
        console.log(array[random].CheckFlying());
        if (array[random].CheckFlying()) {
            var x = ((array[random]).GetModel()).position.x;
            var z = ((array[random]).GetModel()).position.z;
            var locatie = [x, 30, z]; 
            console.log(locatie);
            return locatie;

        }
        else {
            FindRots();
        }

    }


    function animate() {
        requestAnimationFrame(animate);
        var afgerond = parseInt(timer.getElapsedTime(), 10);
        if (afgerond > test) {
            camera.remove(Scoreafdruk);
            Scoreafdruk = Scorebord.DrawScoreboard(afgerond);
            camera.add(Scoreafdruk);
            test += 1;

            //na 10 sec
            if (afgerond % 10 === 0) {
                RotsVal();
                //powerup checken
                //zo niet, nieuwe spawnen

            }

        }

        

        
        var tArray = Trekkers.GetArray();
        for (var i = 0; i < (tArray.length); i++) {
            var car = tArray[i];
            car.Controls(keyboard);
            if ((car.GetModel().position.y) < -100) {
                var test150 = FindRots();
                (car.GetModel()).position.set(test150[0], test150[1], test150[2]);
                (car.GetModel()).__dirtyPosition = true;

                for (var i2 = 0; i2 < (tArray.length); i2++) {
                    var car2 = tArray[i2];
                    if ( (car2.GetModel().id) == (car.GetTouched()) ) {
                        Scorebord.UpdateScore(car2.GetName());
                    }
                }
            }
        }
        render();
    }
    function render() {
        renderer.render(scene, camera);
        scene.simulate(); // run physics
    }
    hide();
    init();
    animate();
}