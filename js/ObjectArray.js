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
        this.Push = function (name, maxspeed, accspeed, forward, left, right, back) {
            oArray[count] = new Trekkerobj(name, maxspeed, accspeed, forward, left, right, back);
            count += 1;
        }
    }
    

    this.GetArray = function() {
        return oArray;
    }

}