function RotsArray(x, y, z)
{
    var count = 1;
    const rots = new SteenObject(x, y, z);
    var rArray = new Array(rots);

    this.Push = function(x, y, z) {
        rArray[count] = new SteenObject(x, y, z);
        count += 1;
    }

    this.GetArray = function() {
        return rArray;
    }

}