/**
 * ObjectArray is een object dat een array bijhoudt van andere objecten. Op basis van de string type word de Push functie aangepast zodat de array het goede type objecten opslaat.
 * @param {string} type Het type van het object, rock, tractor of powerup.
 * @returns {oArray} Returned de array.

 */
function ObjectArray(type)
{
    this.type = type;
    var count = 0;
    var oArray = new Array();

    if (type == 'rock') {
        this.Push = function (x, y, z) {
            oArray[count] = new RockObject(x, y, z);
            count += 1;
        }
    }

    else if (type == 'tractor') {
        this.Push = function (type, name, forward, back, left, right) {
            oArray[count] = new TractorObject(type, name, forward, back, left, right);
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