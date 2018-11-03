function Trekkerobj(maxspeed, accspeed, forward, left, right, back, naam) {

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
    function GetMovespeed() {
        return (speed - 1);
    }

    function GetBackMovespeed() {
        return (backwardspeed - 1);
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
            car.translateZ(-moveDistance * GetMovespeed());
            car.__dirtyPosition = true;

            var klokkie2 = testklokkie;
            if (GetMovespeed() < 1) {
                klokkie2 = testklokkie * (GetMovespeed());
            }            
            car.rotateOnAxis(new THREE.Vector3(0, klokkie2, 0), rotateAngle);
            speed = speed * 0.996;
            car.__dirtyRotation = true;

        }
        if (backwardspeed > 1) {
            car.translateZ(moveDistance * GetBackMovespeed());
            car.__dirtyPosition = true;

            var klokkie2 = testklokkie;
            if (GetBackMovespeed() < 1) {
                klokkie2 = testklokkie * (GetBackMovespeed());
            }     

            car.rotateOnAxis(new THREE.Vector3(0, testklokkie, 0), rotateAngle);
            speed = speed * 0.996;
            car.__dirtyRotation = true;


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
        }


        else if (keyboard.pressed(right)) {
            if (testklokkie > -1) {
                testklokkie -= 0.1;
            }
        }

        else if (testklokkie < 0) {
            testklokkie += 0.1;
        }
        else if (testklokkie > 0) {
            testklokkie -= 0.1;
        }



    }


}