function RockObject(x, y, z) {

    this.x = x;
    this.y = y;
    this.z = z;
    var rock = rockfunction(x, y, z);
    var flying = false;

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
    
    this.Fall = function () {
        var _vector = new THREE.Vector3(1, 1, 1);
        SwapVector(_vector);
        flying = false;
    }

    this.Fly = function () {
        var _vector = new THREE.Vector3(0, 0, 0);
        SwapVector(_vector);
        flying = true;
    }

}