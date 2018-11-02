document.getElementById("startGame").onclick = function () {
    'use strict';

    Physijs.scripts.worker = 'js/physijs_worker.js';
    Physijs.scripts.ammo = 'ammo.js';
    var initScene, render, renderer, scene, camera, box, floor, conrtols, stats;
    var container;
    var cameraControls;
    var box4;
    const Trekker1 = new Trekkerobj(11, 1.01, "W", "A", "D", "S");
    const Trekker2 = new Trekkerobj(11, 1.01, "U", "H", "K", "J");

	    var scorelijst = [0, 0];   
    var speler1 = Trekker1.GetModel();
    var speler2 = Trekker2.GetModel();

    var scene1 = ScoreUpdate("2", 0);
    var scene2 = ScoreUpdate("1", 0);

    const Rotsen = new RotsArray(0, 0, 0);
    Rotsen.Push(30, 0, 0);
    Rotsen.Push(60, 0, 0);
    Rotsen.Push(90, 0, 0);

    var test = Trekker1.GetModel();
    test.position.set(30, 15, 60);
    var test2 = Trekker2.GetModel();
    test2.position.set(90, 15, 90);

    var keyboard = new THREEx.KeyboardState();
    
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
        scene.add(scene1);
        scene.add(scene2);

        camera.position.set(0, 150, 400);
        //camera.lookAt(scene.position);
        scene.add(camera);

        renderer = new THREE.WebGLRenderer({ antialias: false });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight + 5);
        document.body.appendChild(renderer.domElement);

       box4 = new Physijs.BoxMesh(
            new THREE.CubeGeometry(100, 30, 10),
            new THREE.MeshBasicMaterial({ color: 0x888888 }), 0,
            { collision_flags: 0 }
        );


        window.addEventListener('resize', onWindowResize, false);

        scene.add(Trekker1.GetModel());
        scene.add(Trekker2.GetModel());

        var array = Rotsen.GetArray();
        for (var i = 0; i < (array.length); i++)
        {
            scene.add(array[i].GetModel());
            array[i].Fly();
        }
     
        
        scene.add(CircleSkyBox());
        scene.add(Light());
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        Trekker1.Controls(keyboard);
        Trekker2.Controls(keyboard);

		 speler1.__dirtyPosition = true;
        speler2.__dirtyPosition = true;

        if (speler1.position.y <= -200)
        {
            scene.remove(scene1);
            scorelijst[0] += 100;
            scene1 = ScoreUpdate("2", scorelijst[0]);
            scene.add(scene1);
            speler1.position.set(-0, 20, 20);
        }
        
        if (speler2.position.y <= -200)
        {
            scene.remove(scene2);
            scorelijst[1] += 100;
            scene2 = ScoreUpdate("1", scorelijst[1]);
            scene.add(scene2);
            speler2.position.set(20, 20, 0);
        }
		
		
        var relativeCameraOffset = new THREE.Vector3(0, 50, 200);
        //var cameraOffset = relativeCameraOffset.applyMatrix4(car.matrixWorld);
        //camera.position.x = cameraOffset.x;
        //camera.position.y = cameraOffset.y;
        //camera.position.z = cameraOffset.z;
        //camera.lookAt((Trekker1.GetModel()).position);

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