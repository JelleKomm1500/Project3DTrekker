document.getElementById("startGame").onclick = function () {
    'use strict';

    Physijs.scripts.worker = 'js/physijs_worker.js';
    Physijs.scripts.ammo = 'ammo.js';
    var initScene, render, renderer, scene, camera, box, floor, conrtols, stats;
    var timer = new THREE.Clock();
    timer.start()

    var test = 0;

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

        //geen idee waarom maar door dit vallen de trekkers niet door de grond
        var rots = new Physijs.BoxMesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshFaceMaterial({ color: 0xa3272, transparent: false, opacity: 0 }), 0
        );
        scene.add(rots);
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
            scene.add(car);
            var i2 = i * 30;
            car.position.set(50, 30, 50);
        }
        //scene.add(CircleSkyBox());
        scene.add(Light());

        
        camera.add(Scoreafdruk);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        var afgerond = parseInt(timer.getElapsedTime(), 10);
        if (afgerond > test) {
            camera.remove(Scoreafdruk);
            Scoreafdruk = Scorebord.DrawScoreboard(afgerond);
            camera.add(Scoreafdruk);
            test += 1;

            if (afgerond % 10 === 0) {
                console.log("jaaaa");
                var array = Rotsen.GetArray();
                var random = Math.floor(Math.random() * array.length);
                console.log(random);
                array[random].Fall();
            }

        }
        
        var tArray = Trekkers.GetArray();
        for (var i = 0; i < (tArray.length); i++) {
            var car = tArray[i];
            console.log(car.GetModel().position.y);
            car.Controls(keyboard);
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