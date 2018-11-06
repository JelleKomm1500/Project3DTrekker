/**
 * Beheerd de Physijs.Boxmesh die uit rockfunction komt.
 * @param {number} x De x coördinaat.
 * @param {number} y De y coördinaat.
 * @param {number} z De z coördinaat.
 */
function RockObject(x, y, z) {

    this.x = x;
    this.y = y;
    this.z = z;
    var rock = rockfunction(x, y, z);
    var flying = false;

    //Zorgt dat andere functies de vector kunnen aanpassen met als doel om het effect van gravity aan en uit te kunnen zetten.
    function SwapVector(_vector) {
        rock.setAngularFactor(_vector);
        rock.setAngularVelocity(_vector);
        rock.setLinearFactor(_vector);
        rock.setLinearVelocity(_vector);
    }

    this.CheckFlying = function () {
        return flying;
    }
    this.GetModel = function () {
        return rock;       
    } 

    //Swapt de vector naar 1 zodat gravity weer werkt en de rock kan vallen.
    this.Fall = function () {
        var _vector = new THREE.Vector3(1, 1, 1);
        SwapVector(_vector);
        flying = false;
    }

    //Swapt de vector naar 0 zodat gravity niet meer weer werkt en de rock kan vliegen.
    this.Fly = function () {
        var _vector = new THREE.Vector3(0, 0, 0);
        SwapVector(_vector);
        flying = true;
    }

}