/**
 * Deze functie beheerd en bouwt het spel.
 * @param {Array} settingsarray Array waarin staat hoeveel tractors er moeten komen en welke settings deze hebben.
 */
function StartGame(settingsarray) {
    //Linkt de physijs library aan de scene.
    'use strict';
    Physijs.scripts.worker = 'js/physijs_worker.js';
    Physijs.scripts.ammo = 'ammo.js';
    var initScene, render, renderer, scene, camera, box, floor, conrtols, stats;
    
    //Variabelen om de tijd en de state van het spel bij te houden.
    var timer = new THREE.Clock();
    timer.start();
    var endstage = 0;
    var timersecs = 0;
    var endtimersecs = 0;

    //Maak objectarray's aan voor de powerups, de rocks en de tractors.
    const Powerups = new ObjectArray("powerup");
    const Rocks = new ObjectArray("rock");
    //Loopje om de rotsen te pushen. De eerste for bepaalt het verticale aantal stenen, de tweede for bepaalt het horizontale aantal stenen.
    for (var i = 150; i > -240; i-=60) {
        for (var i2 = 5; i2 > -5; i2--) {
            Rocks.Push((i2 * 60), -10, i);
        }
    }
    const Tractors = new ObjectArray("tractor");
    //Pushed tractors met de settings meegegeven in het hoofdmenu.
    for (var i = 0; i < (settingsarray.length); i++) {
        var eendArray = settingsarray[i];       
        if (!(eendArray[4] == "")) {
            console.log(eendArray);
            Tractors.Push(eendArray[0], eendArray[1], eendArray[2], eendArray[3], eendArray[4], eendArray[5]);    
        }          
    }
    //Maakt scorebord en keyboard aan.
    const Scorebord = new Scoreboard();
    Scorebord.LoadPlayers(Tractors.GetArray());
    var keyboard = new THREEx.KeyboardState();
    var Scoremodel = Scorebord.DrawScoreboard(timer.getElapsedTime());

    //Verstopt het main menu.
    function hide() {
        document.getElementById("menu").style.overflow = "hidden";
        window.scrollTo(0, 0);
        var x = document.getElementById("wrapper");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    //Word één keer gerunned aan het begin.
    function init() {
        //Maakt scene
        scene = new Physijs.Scene;
        scene.setGravity(new THREE.Vector3(0, -250, 0));
        scene.add(CubeSkybox());
        //Maakt camera view, scene and renderer
        var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 200000;
        camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        camera.position.set(0, 450, 450);
        camera.lookAt(0, 0, 0);
        scene.add(camera);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight + 5);
        document.body.appendChild(renderer.domElement);

        window.addEventListener('resize', onWindowResize, false);

        //Spawned alle rocks en zorgt dat ze (nog) niet vallen.
        var rArray = Rocks.GetArray();
        for (var i = 0; i < (rArray.length); i++)
        {
            scene.add(rArray[i].GetModel());
            rArray[i].Fly();
        }

        //Spawned de tractors in en zorgt dat ze geen powerups kunnen op pakken als ze het type 'bulldozer' hebben.
        var tArray = Tractors.GetArray();
        for (var i = 0; i < (tArray.length); i++) {
            var car = tArray[i].GetModel();
            var i2 = i * 30;
            car.position.set(i2, 30, i2);      
            scene.add(car);
            if (tArray[i].GetType != "bulldozer") {
                car.addEventListener('collision', function (other_object, linear_velocity, angular_velocity) {
                    var pArray = Powerups.GetArray();
                    for (var i2 = 0; i2 < (pArray.length); i2++) {
                        if (other_object.id == pArray[i2].GetModel().id) {
                            var poweruptype = pArray[i2].GetType();
                            for (var i = 0; i < (tArray.length); i++) {
                                if (tArray[i].GetModel().id == this.id) {
                                    tArray[i].ReceivePowerup(poweruptype);
                                }
                            }
                            scene.remove(pArray[i2].GetModel());
                        }
                    }

                })
            }
            
        
            
        }
        //Voegt de lichten en het scorebord toe aan de scene.
        var ambientLight = new THREE.AmbientLight(0x404040, 1); // soft white light
        var directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);
        directionalLight.position.set(125, 100, 0);        
        scene.add(ambientLight);
        scene.add(directionalLight);
        camera.add(Scoremodel);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //Zet gravity weer aan op een random rock. Deze functie roept zichzelf weer aan als de random gekozen rock al gevallen is.
    function RotsFall() {
        var array = Rocks.GetArray();
        var random = Math.floor(Math.random() * array.length);
        if (array[random].CheckFlying()) {
            array[random].Fall();
        }
        else RotsFall();        
    }

    //Vind en returned de coords van een nog niet gevallen rots.
    function FindRots() {
        var array = Rocks.GetArray();
        var random = Math.floor(Math.random() * array.length);
        if (array[random].CheckFlying()) {
            var x = ((array[random]).GetModel()).position.x;
            var z = ((array[random]).GetModel()).position.z;
            var locatie = [x, 30, z]; 
            return locatie;
        }
        else {
            FindRots();
        }
    }

    //Deze functie runt vele malen per seconden opnieuw.
    function animate() {
        requestAnimationFrame(animate);
        //Als het spel nog niet voorbij is.
        if (endstage==0) {
            var roundedtimer = parseInt(timer.getElapsedTime(), 10);
            //Deze if runt elke seconde één keer.
            if (roundedtimer > timersecs) {
                //Update het scorebord.
                camera.remove(Scoremodel);
                Scoremodel = Scorebord.DrawScoreboard(roundedtimer);
                camera.add(Scoremodel);
                timersecs += 1;

                //Er is elke seconde een 20% kans om een rots of een powerup te droppen.
                var Chance = Math.floor(Math.random() * 10) + 1;
                if (Chance ==2) {
                    RotsFall();
                }
                if (Chance == 3) {
                    //Kiest random één van de twee powerups en spawned deze boven een niet gevallen rock.
                    var random = Math.random();
                    Powerups.Push(random);
                    var parray = Powerups.GetArray();
                    var powerupbox = (parray[parray.length - 1]).GetModel();
                    var rotsloc = FindRots();
                    powerupbox.position.set(rotsloc[0], 400, rotsloc[2]);
                    scene.add(powerupbox);
                }

                //Zet in de endstage variabele dat de tijdslimiet is bereikt.
                if (roundedtimer % 300 === 0) {
                    endstage = 1;
                }
            }

            //Gaat door alle tractors heen.
            var tArray = Tractors.GetArray();
            for (var i = 0; i < (tArray.length); i++) {
                var car = tArray[i];
                //Runned de Controls functie als die speler nog levend is.
                if ((car.CheckAlive())) {
                    car.Controls(keyboard);
                    //Geeft de speler één extra leven als hij net een +1 leven powerup heeft opgepakt.
                    if (car.GetNeedsHeart()) {
                        car.FlipNeeds();
                        Scorebord.GiveLife(car.GetName());
                    }
                    //Kijkt of een speler levend en onder y 100 is. Als dit zo is update hij het aantal levens en respawned of dood hij de auto afhankelijk van het aantal levens.
                    if (((car.GetModel().position.y) < -100) && (car.CheckAlive())) {
                        var lives = Scorebord.UpdateScore(car.GetName());
                        if (lives > 0) {
                            var rotsloc = FindRots();
                            car.ResetVelocity();
                            (car.GetModel()).position.set(rotsloc[0], rotsloc[1], rotsloc[2]);
                            (car.GetModel()).__dirtyPosition = true;
                        }
                        else {
                            car.Die();
                        }
                    }
                }
                //Kijkt of er nog maar 1 iemand levend is. Als dit zo is start hij endstage 1.
                else {
                    var count = 0;
                    for (var i = 0; i < (tArray.length); i++) {
                        if (!(tArray[i].CheckAlive())) { count++ }
                    }
                    if (count == (tArray.length-1)) { endstage = 1; }                   
                }
            }
                    
        }
        else {
            //Als het endstage 1 is reset hij de timer en geeft hij het eindscherm weer.
            if (endstage==1) {
                endstage=2;
                var name = Scorebord.GetHighestScore();
                camera.remove(Scoremodel);
                camera.add(Ending(name));
                timer.stop();
                timer.start();
            }
            //Redirect 10 sec na het einde van het spel terug naar index.
            else {
                var roundedtimer = parseInt(timer.getElapsedTime(), 10);
                if (roundedtimer > endtimersecs) {
                    endtimersecs += 1;
                    if (roundedtimer % 10 === 0) {
                        window.location.href = "index.html";
                    }
                }
                    
            }
            
        }
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