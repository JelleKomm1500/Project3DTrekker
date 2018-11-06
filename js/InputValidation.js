function InputValidation(settingsarray) {
    var inputbool = true;
    for (var i = 0; i < (settingsarray.length); i++) {
        var eendArray = settingsarray[i];
        if (!(eendArray[4] == "")) {
            for (var i2 = 2; i2 < 5; i2++) {
                if (eendArray[i2].length > 1) { inputbool = false; }
            }
        }


    }

    if (inputbool) {
        StartGame(settingsarray);
    }
    else {
        alert("De controls mogen maar 1 karakter lang zijn!");
    }
}