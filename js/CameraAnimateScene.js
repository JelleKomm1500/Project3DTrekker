document.getElementById("startGame").onclick = function () {
    var clock = new THREE.Clock();
    var keyboard = new THREEx.KeyboardState();
    var camera, scene, renderer, stats;
    var angle = 0;
    var speed = 1;
    var car;
    car = Trekker();

    function hide() {
        var x = document.getElementById("main");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    function init() {
        //Create scene
        scene = new THREE.Scene();
        //create camera view, scene and renderer
        var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 200000;
        camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        scene.add(camera);
        camera.position.set(0, 150, 400);
        camera.lookAt(scene.position);

        renderer = new THREE.WebGLRenderer({ antialias: false });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight + 5);
        document.body.appendChild(renderer.domElement);

        window.addEventListener('resize', onWindowResize, false);
        //skybox.position.y -= 225;
       // scene.add(skybox);
        scene.add(car);
        scene.add(Plane());
        scene.add(Light());


    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);

        var delta = clock.getDelta(); // seconds.
        var moveDistance = 100 * delta; // 200 pixels per second
        var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second

        if (keyboard.pressed("W"))
            car.translateZ(-moveDistance * speed);
        if (keyboard.pressed("S"))
            car.translateZ(moveDistance * speed);

        // rotate left/right/up/down
        if (keyboard.pressed("A"))
            car.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotateAngle);
        if (keyboard.pressed("D"))
            car.rotateOnAxis(new THREE.Vector3(0, 1, 0), -rotateAngle);

        if (keyboard.pressed("Z")) {
            car.position.set(0, 25.1, 0);
            car.rotation.set(0, 0, 0);
        }

        var relativeCameraOffset = new THREE.Vector3(0, 50, 200);
        var cameraOffset = relativeCameraOffset.applyMatrix4(car.matrixWorld);
        camera.position.x = cameraOffset.x;
        camera.position.y = cameraOffset.y;
        camera.position.z = cameraOffset.z;
        camera.lookAt(car.position);

        render();
    }
    function render() {
        renderer.render(scene, camera);
    }
    hide();
    init();
    animate();
}