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