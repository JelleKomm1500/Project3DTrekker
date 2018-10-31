function Trekkerobj(maxspeed, accspeed, forward, left, right, back) {

    this.maxspeed = maxspeed;
    this.accspeed = accspeed;
    var clock = new THREE.Clock();
    var speed = 1;
    var backwardspeed = 1;
    var testklokkie = 0;
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
                return 1.5;
            }
            else {
                return speed2 * 1.5;
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
            car.translateZ(moveDistance * backwardspeed);
            car.__dirtyPosition = true;


        }
        if (keyboard.pressed(forward)) {
            if (backwardspeed > 1) {
                backwardspeed = backwardspeed * 0.99;
            }
            if (!(speed > maxspeed)) {
                speed = speed * accspeed;
            }

        }
        else if (speed > 1) {
            speed = speed * 0.98;
        }

        if (keyboard.pressed(back)) {
            if (speed > 1) {
                speed = speed * 0.98;
            }
            else if (!(backwardspeed > (5))) {
                backwardspeed = backwardspeed * 1.01;
            }

        }

        else if (backwardspeed > 1) {
            backwardspeed = backwardspeed * 0.99;
        }

        // rotate left/right/up/down
        if (keyboard.pressed(left)) {
            if (testklokkie < 1) {
                testklokkie += 0.1;
            }
            car.rotateOnAxis(new THREE.Vector3(0, testklokkie, 0), rotateAngle);
            speed = speed * 0.996;
            car.__dirtyRotation = true;
        }


        if (keyboard.pressed(right)) {
            if (testklokkie > -1) {
                testklokkie -= 0.1;
                console.log("jasd");
            }
            car.rotateOnAxis(new THREE.Vector3(0, testklokkie, 0), rotateAngle);
            speed = speed * 0.996;
            car.__dirtyRotation = true;
        }



    }


}