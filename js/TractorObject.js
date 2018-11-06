/**
 * Beheerd de tractor/bulldozer.
 * @param {string} type    Het type tractor bulldozer of tractor.
 * @param {string} name    De naam van de speler die deze tractor bestuurt.
 * @param {string} forward Een string met één char die bepaalt met welke key je accelereert.
 * @param {string} back    Een string met één char die bepaalt met welke key je achteruit gaat.
 * @param {string} left    Een string met één char die bepaalt met welke key je naar links draait.
 * @param {string} right   Een string met één char die bepaalt met welke key je naar rechts draait.
 */
function TractorObject(type, name, forward, back, left, right) {

    //Declareert variabelen.
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

    //Vult variabelen in op basis van het meegegeven type.
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

    //Verandert de bool needsheart.
    this.FlipNeeds = function () {
        needsheart = !needsheart;
    }
    //Getfuncties zodat andere functies bij deze variabelen kunnen.
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

    //Verandert variabelen van de tractor op basis van het type powerup.
    this.ReceivePowerup = function (type) {
        if (type == 0) { needsheart=true; }
        else if (type == 1) { accspeed = accspeed * 2; }
    }

    //Zet de auto weer normaal neer bij het respawnen.
    this.ResetVelocity = function () {
        var force_vector = new THREE.Vector3(0, 0, 0);
        car.setLinearVelocity(force_vector);
        car.setAngularVelocity(force_vector);
        car.rotation.set(0, 0, 0);
        car.__dirtyRotation = true;

    }

    //Voert stukjes code uit die horen bij ingedrukte key(s).
    this.Controls = function (keyboard) {
        var delta = clock.getDelta(); // seconds.
        var moveDistance = 50 * delta; // 100 pixels per second
        var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second
        var forceVector = new THREE.Vector3(0, 0, 0); //beweginsvector

        //De tractor controls worden uitgeschakeld als je moet vallen.
        if (car.position.y < 27 || car.position.y > 33) {
            speed = 1;
            backwardspeed = 1;
        }

        //Genereert en apply'd bewegingsvector als je moet bewegen.
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

        //Genereert en apply'd bewegingsvector als je achteruit moet bewegen.
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

        //Verhoogt je vooruit snelheid en verlaagt achteruitsnelheid als je naar voren wil bewegen.
        if (keyboard.pressed(forward)) {
            if (backwardspeed > 1) {
                backwardspeed = backwardspeed * 0.98;
            }
            if (!(speed > maxspeed)) {
                speed = speed * accspeed;
            }
        }

        //Verlaagt je speed als je geen gas geeft.
        else if (speed > 1) {
            speed = speed * 0.98;
        }

        //Verlaagt je speed en verhoogt je backwardspeed als je achteruit wil.
        if (keyboard.pressed(back)) {
            if (speed > 1) {
                speed = speed * 0.98;
            }
            else if (!(backwardspeed > (5))) {
                backwardspeed = backwardspeed * 1.01;
            }

        }

        //Verlaagt je backwardspeed als je de achteruit key niet indrukt.
        else if (backwardspeed > 1) {
            backwardspeed = backwardspeed * 0.985;
        }

        //Verandert de positie van de wielen naar links als je links indrukt.
        if (keyboard.pressed(left)) {
            if (wheelpos < 1) {
                wheelpos += 0.1;
            }
        }

        //Verandert de positie van de wielen naar rechts als je rechts indrukt.
        else if (keyboard.pressed(right)) {
            if (wheelpos > -1) {
                wheelpos -= 0.1;
            }
        }

        //Beide else if's resetten langzaam terug naar 0 als je niet stuurt.
        else if (wheelpos < 0) {
            wheelpos += 0.1;
        }
        else if (wheelpos > 0) {
            wheelpos -= 0.1;
        }
    }
}