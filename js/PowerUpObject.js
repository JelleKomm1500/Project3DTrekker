/**
 * Beheerd oop de PowerBoxfunctie. Kan deze returnen en vertellen om welk type powerup het gaat.
 */
function PowerUpObj(type) {
    this.type = type;
    var PowerBox = PowerBoxFunctie(type); 
    this.GetModel = function ()
    {
        return PowerBox;
    }
    this.GetType = function () {
        return type;
    }
}