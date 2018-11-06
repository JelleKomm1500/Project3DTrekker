function TractorObject(type, name, forward, back, left, right) {

    this.type = type;
    this.name = name;
    var maxspeed;
    var accspeed;
    var clock = new THREE.Clock();
    var speed = 1;
    var backwardspeed = 1;
    var wheelpos = 0;
    var dead = false;
    var needsheart = false;
    var car;
    if (type == "tractor") {
        car = Tractor(name);
        maxspeed = 10;
        accspeed = 1.01;

    }
    else if (type == "bulldozer") {
        car = Bulldozer(name);
        maxspeed = 8;
        accspeed = 1.008;

    }
    
    this.FlipNeeds = function () {
        needsheart = !needsheart;
    }
    this.GetType = function () {
        return type;
    }
    this.GetNeedsHeart = function () {
        return needsheart;
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
    
    this.ReceivePowerup = function (type) {
        if (type == 0) { needsheart=true; }
        else if (type == 1) { accspeed = accspeed * 2; }
        else if (type == 2) { console.log("dit is een type 2 powerup") }
    }
    this.ResetVelocity = function () {
        var force_vector = new THREE.Vector3(0, 0, 0);
        car.setLinearVelocity(force_vector);
        car.setAngularVelocity(force_vector);
        car.rotation.set(0, 0, 0);
        car.__dirtyRotation = true;

    }
    this.Controls = function (keyboard) {
        var delta = clock.getDelta(); // seconds.
        var moveDistance = 50 * delta; // 100 pixels per second
        var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second
        var forceVector = new THREE.Vector3(0, 0, 0);



        console.log(car.position.y);

        if (car.position.y < 27 || car.position.y > 33) {

            speed = 1;
            backwardspeed = 1;
        }

        if (speed > 1) {
            var rotation_matrix = new THREE.Matrix4().extractRotation(car.matrix);
            var force_vector = new THREE.Vector3(0, 0, GetMovespeed() * -10).applyMatrix4(rotation_matrix);
            car.setLinearVelocity(force_vector);


            var wheelpos2 = wheelpos;
            if (GetMovespeed() < 1) {
                wheelpos2 = wheelpos * (GetMovespeed());
            }            

            speed = speed * 0.996;

            var force_vector = new THREE.Vector3(0, wheelpos2, 0).applyMatrix4(rotation_matrix);
            car.setAngularVelocity(force_vector);

        }
        if (backwardspeed > 1) {
            var rotation_matrix = new THREE.Matrix4().extractRotation(car.matrix);
            var force_vector = new THREE.Vector3(0, 0, GetBackMovespeed() * 10).applyMatrix4(rotation_matrix);
            car.setLinearVelocity(force_vector);

            var wheelpos2 = wheelpos;
            if (GetBackMovespeed() < 1) {
                wheelpos2 = wheelpos * (GetBackMovespeed());
            }     

            speed = speed * 0.996;
            var force_vector = new THREE.Vector3(0, wheelpos2, 0).applyMatrix4(rotation_matrix);
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

        if (keyboard.pressed(left)) {
            if (wheelpos < 1) {
                wheelpos += 0.1;
            }
        }

        else if (keyboard.pressed(right)) {
            if (wheelpos > -1) {
                wheelpos -= 0.1;
            }
        }

        else if (wheelpos < 0) {
            wheelpos += 0.1;
        }
        else if (wheelpos > 0) {
            wheelpos -= 0.1;
        }



    }


}