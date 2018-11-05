function Trekkerobj(name, maxspeed, accspeed, forward, left, right, back) {

    this.name = name;
    this.maxspeed = maxspeed;
    this.accspeed = accspeed;
    var clock = new THREE.Clock();
    var speed = 1;
    var backwardspeed = 1;
    var testklokkie = 0;
    var car = Trekker(name);
    var otherCars;
    var lastTouchedBy;


    car.addEventListener('collision', function (other_object, linear_velocity, angular_velocity) {

        for (var i = 0; i < (otherCars.length); i++) {
            if (other_object.id == (otherCars[i].GetModel()).id) {
                lastTouchedBy = (otherCars[i].GetModel()).id;
                console.log((otherCars[i].GetModel()).id);
            }

        }
        
    })

    this.GetTouched = function () {
        return lastTouchedBy;
    }

    this.loadOthers = function (trekkers) {
        otherCars = trekkers;
    }

    this.GetName = function () {
        return name;
    }
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

    this.ReceivePowerup = function (type) {
        if (type == 0) { console.log("dit is een type 0 powerup")}
        else if (type == 1) { console.log("dit is een type 1 powerup") }
        else if (type == 2) { console.log("dit is een type 2 powerup") }
    }
    this.Controls = function (keyboard) {
        var delta = clock.getDelta(); // seconds.
        var moveDistance = 50 * delta; // 100 pixels per second
        var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second
        var forceVector = new THREE.Vector3(0, 0, 0);
        if (speed > 1) {
            //car.translateZ(-moveDistance * GetMovespeed());
            //car.__dirtyPosition = true;

            //var rotation_matrix = new THREE.Matrix4().extractRotation(car.matrix);
            //var force_vector = new THREE.Vector3(0, 0, (GetMovespeed() * -1)).applyMatrix4(rotation_matrix);
            //car.applyCentralImpulse(force_vector);

            var rotation_matrix = new THREE.Matrix4().extractRotation(car.matrix);
            var force_vector = new THREE.Vector3(0, 0, GetMovespeed() * -10).applyMatrix4(rotation_matrix);
            car.setLinearVelocity(force_vector);


            //var rotation_matrix = new THREE.Matrix4().extractRotation(car.matrix);
            //var force_vector = new THREE.Vector3(0, 0, (GetMovespeed() * -10)).applyMatrix4(rotation_matrix);
            //car.applyCentralImpulse(force_vector);

            var klokkie2 = testklokkie;
            if (GetMovespeed() < 1) {
                klokkie2 = testklokkie * (GetMovespeed());
            }            
            //car.rotateOnAxis(new THREE.Vector3(0, klokkie2, 0), rotateAngle);
            speed = speed * 0.996;
            //car.__dirtyRotation = true;

            var force_vector = new THREE.Vector3(0, klokkie2, 0).applyMatrix4(rotation_matrix);
            car.setAngularVelocity(force_vector);

        }
        if (backwardspeed > 1) {
            //car.translateZ(moveDistance * GetBackMovespeed());
            //car.__dirtyPosition = true;
            var rotation_matrix = new THREE.Matrix4().extractRotation(car.matrix);
            var force_vector = new THREE.Vector3(0, 0, GetBackMovespeed() * 10).applyMatrix4(rotation_matrix);
            car.setLinearVelocity(force_vector);

            var klokkie2 = testklokkie;
            if (GetBackMovespeed() < 1) {
                klokkie2 = testklokkie * (GetBackMovespeed());
            }     

            //car.rotateOnAxis(new THREE.Vector3(0, testklokkie, 0), rotateAngle);
            speed = speed * 0.996;
            //car.__dirtyRotation = true;
            var force_vector = new THREE.Vector3(0, klokkie2, 0).applyMatrix4(rotation_matrix);
            car.setAngularVelocity(force_vector);


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