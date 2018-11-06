function Trekkerobj(type, name, forward, back, left, right) {

    this.type = type;
    this.name = name;
    var maxspeed;
    var accspeed;
    var clock = new THREE.Clock();
    var speed = 1;
    var backwardspeed = 1;
    var testklokkie = 0;
    var car;
    if (type == "snel") {
        car = Trekker(name);
        maxspeed = 10;
        accspeed = 1.01;

    }
    else if (type == "zwaar") {
        car = ZwareTrekker(name);
        maxspeed = 8;
        accspeed = 1.008;

    }
    var dead = false;
    var needspoint = false;
    //var otherCars;
    //var lastTouchedBy;


    
    //this.GetTouched = function () {
    //    return lastTouchedBy;
    //}

    //this.loadOthers = function (trekkers) {
    //    otherCars = trekkers;
    //}
    this.FlipNeeds = function () {
        needspoint = !needspoint;
    }
    this.GetNeedsPoint = function () {
        return needspoint;
    }
    this.GetName = function () {
        return name;
    }
    this.Die = function () {
        dead = true;
    }
    this.CheckAlive = function () {
        return !(dead);
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
        if (type == 0) { needspoint=true; }
        else if (type == 1) { accspeed = accspeed * 2; }
        else if (type == 2) { console.log("dit is een type 2 powerup") }
    }
    this.Controls = function (keyboard) {
        var delta = clock.getDelta(); // seconds.
        var moveDistance = 50 * delta; // 100 pixels per second
        var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second
        var forceVector = new THREE.Vector3(0, 0, 0);

        //car.__dirtyPosition = true;
        if (car.position.x >= 350 || car.position.x <= - 280 || car.position.z >= 180 || car.position.z <= -220) {

            speed = 0;
            backwardspeed = 0;
        }

        console.log(car.position.y);

        if (car.position.y < 27) {

            speed = 0;
            backwardspeed = 0;
        }

        if (speed > 1) {
            //car.translateZ(-moveDistance * GetMovespeed());
          
            //var rotation_matrix = new THREE.Matrix4().extractRotation(car.matrix);
            //var force_vector = new THREE.Vector3(0, 0, (GetMovespeed() * -1)).applyMatrix4(rotation_matrix);
            //car.applyCentralImpulse(force_vector);

            var rotation_matrix = new THREE.Matrix4().extractRotation(car.matrix);
            var force_vector = new THREE.Vector3(0, 0, GetMovespeed() * -10).applyMatrix4(rotation_matrix);
            car.setLinearVelocity(force_vector);


            var klokkie2 = testklokkie;
            if (GetMovespeed() < 1) {
                klokkie2 = testklokkie * (GetMovespeed());
            }            

            speed = speed * 0.996;

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