﻿function SteenObject(x, y, z) {

    this.x = x;
    this.y = y;
    this.z = z;
    var rots = rotsfunctie(x,y,z);
    this.GetModel = function () {
        return rots;
        
    } 
    this.Fall = function () {
        var _vector = new THREE.Vector3(1, 1, 1);
        rots.setAngularFactor(_vector);
        rots.setAngularVelocity(_vector);
        rots.setLinearFactor(_vector);
        rots.setLinearVelocity(_vector);
    }

    this.Fly = function () {
        var _vector = new THREE.Vector3(0, 0, 0);
        rots.setAngularFactor(_vector);
        rots.setAngularVelocity(_vector);
        rots.setLinearFactor(_vector);
        rots.setLinearVelocity(_vector);
    }

}