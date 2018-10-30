function Trekkerobj(maxspeed) {

    this.maxspeed = maxspeed;
    var clock = new THREE.Clock();
    var speed = 1;
    var backwardspeed = 1;
    var car = Trekker();
    this.GetModel = function () {
        return car;
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
    this.Controls = function (keyboard) {


        var delta = clock.getDelta(); // seconds.
        var moveDistance = 50 * delta; // 100 pixels per second
        var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second
        if (speed > 1) {
            car.translateZ(-moveDistance * speed);
            car.__dirtyPosition = true;

        }
        if (backwardspeed > 1) {
            car.translateZ(moveDistance * speed);
            car.__dirtyPosition = true;


        }
        if (keyboard.pressed("W")) {
            if (backwardspeed > 1) {
                backwardspeed = backwardspeed * 0.9;
            }
            if (!(speed > maxspeed)) {
                speed = speed * 1.01;
            }

        }
        else if (speed > 1) {
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
        car.__dirtyRotation = true;

        if (keyboard.pressed("D"))
            car.rotateOnAxis(new THREE.Vector3(0, CalcAngle(), 0), -rotateAngle);
        car.__dirtyRotation = true;

        if (keyboard.pressed("Z")) {
            car.position.set(0, 25.1, 0);
            car.rotation.set(0, 0, 0);
        }

        
    }


}