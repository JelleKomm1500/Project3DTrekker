function ObjectArray(type)
{
    this.type = type;
    var count = 0;
    var oArray = new Array();

    if (type == 'rots') {
        this.Push = function (x, y, z) {
            oArray[count] = new SteenObject(x, y, z);
            count += 1;
        }
    }

    else if (type == 'trekker') {
        this.Push = function (type, name, forward, left, right, back) {
            oArray[count] = new Trekkerobj(type, name, forward, left, right, back);
            count += 1;
        }
    }
    else if (type == 'powerup') {
        this.Push = function (type) {
            oArray[count] = new PowerUpObj(type);
            count += 1;
        }
    }
    

    this.GetArray = function() {
        return oArray;
    }

}