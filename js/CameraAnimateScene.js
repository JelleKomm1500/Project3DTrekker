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
	
	
    const Rots1 = new SteenObject(0, 0, 0);
    const Rots2 = new SteenObject(30, 0, 0);
    const Rots3 = new SteenObject(60, 0, 0);
    const Rots4 = new SteenObject(90, 0, 0);

    const Rots5 = new SteenObject(0, 0, 30);
    const Rots6 = new SteenObject(30, 0, 30);
    const Rots7 = new SteenObject(60, 0, 30);
    const Rots8 = new SteenObject(90, 0, 30);

    const Rots9 = new SteenObject(0, 0, 60);
    const Rots10 = new SteenObject(30, 0, 60);
    const Rots11 = new SteenObject(60, 0, 60);
    const Rots12 = new SteenObject(90, 0, 60);

    const Rots13 = new SteenObject(0, 0, 90);
    const Rots14 = new SteenObject(30, 0, 90);
    const Rots15 = new SteenObject(60, 0, 90);
    const Rots16 = new SteenObject(90, 0, 90);

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

        scene.add(Rots1.GetModel());
        Rots1.Fly();
        scene.add(Rots2.GetModel());
        Rots2.Fly();
        scene.add(Rots3.GetModel());
        Rots3.Fly();
        scene.add(Rots4.GetModel());
        Rots4.Fly();

        scene.add(Rots5.GetModel());
        Rots5.Fly();
        scene.add(Rots6.GetModel());
        Rots6.Fly();
        scene.add(Rots7.GetModel());
        Rots7.Fly();
        scene.add(Rots8.GetModel());
        Rots8.Fly();

        scene.add(Rots9.GetModel());
        Rots9.Fly();
        scene.add(Rots10.GetModel());
        Rots10.Fly();
        scene.add(Rots11.GetModel());
        Rots11.Fly();
        scene.add(Rots12.GetModel());
        Rots12.Fly();

        scene.add(Rots13.GetModel());
        Rots13.Fly();
        scene.add(Rots14.GetModel());
        Rots14.Fly();
        scene.add(Rots15.GetModel());
        Rots15.Fly();
        scene.add(Rots16.GetModel());
        Rots16.Fly();

        
        
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