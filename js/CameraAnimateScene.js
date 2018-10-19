var camera, scene, renderer, stats;
var cameraControls;
var angle = 0;
var basespeed = 1;
var speed = 1;
var acceleration = 0;
var maxspeed = 10;
var car, skybox, plane, light;
var backwardspeed = 1;

window.onload = function () {
    function load() {
        car = Trekker();
        skybox = CircleSkyBox();
        plane = Plane(renderer);
        light = Light();
    }
    load();
}

document.getElementById("startGame").onclick = function () {
    var clock = new THREE.Clock();
    var keyboard = new THREEx.KeyboardState();

    function hide() {
        var x = document.getElementById("main");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    function CalcAngle() {
        if (speed / 10 <= 0.1) {
            return 0;
        }
        else {
            var speed2 = speed / 10;
            if (speed2 >= 1) {
                return 1;
            }
            else {
                return speed2;
            }
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
        skybox.position.y -= 225;

        scene.add(skybox);
        scene.add(car);
        scene.add(plane);
        scene.add(light);


    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);

        var delta = clock.getDelta(); // seconds.
        var moveDistance = 50 * delta; // 100 pixels per second
        var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second
        if (speed > 1) {
            car.translateZ(-moveDistance * speed);
        }
        if (backwardspeed > 1) {
            car.translateZ(moveDistance * speed);

        }
        if (keyboard.pressed("W")) {
            if (backwardspeed > 1) {
                backwardspeed = backwardspeed * 0.9;
            }
            if (!(speed > maxspeed)) {
                speed = speed * 1.01;
            }

        }
        else if (speed > basespeed) {
            speed = speed * 0.99;
        }

        if (keyboard.pressed("S")) {
            if (speed > 1) {
                speed = speed * 0.90;
            }
            else if (!(backwardspeed > (maxspeed / 3))) {
                backwardspeed = backwardspeed * 1.01;
            }

        }

        else if (backwardspeed > 1) {
            backwardspeed = backwardspeed * 0.99;
        }

        // rotate left/right/up/down
        if (keyboard.pressed("A"))
            car.rotateOnAxis(new THREE.Vector3(0, CalcAngle(), 0), rotateAngle);
        if (keyboard.pressed("D"))
            car.rotateOnAxis(new THREE.Vector3(0, CalcAngle(), 0), -rotateAngle);

        if (keyboard.pressed("Z")) {
            car.position.set(0, 25.1, 0);
            car.rotation.set(0, 0, 0);
        }

        var relativeCameraOffset = new THREE.Vector3(0, 50, 200);
        //var cameraOffset = relativeCameraOffset.applyMatrix4(car.matrixWorld);
        //camera.position.x = cameraOffset.x;
        //camera.position.y = cameraOffset.y;
        //camera.position.z = cameraOffset.z;
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