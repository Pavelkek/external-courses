'use strict'
function concatOnPlace (anyStr1, anyStr2, place){
    var pos = -1;
    var masSpace = [];
    var i = 0;
    var newStr1 = anyStr1;
    var newStr2 = anyStr2;
    var newPlace = place;
    while ((pos = newStr1.indexOf(' ', pos + 1)) !== -1) {
        masSpace[i] = pos;
        i++;
    };
    newStr1 = newStr1.substring(0,masSpace[newPlace]) + ' ' + newStr2 + newStr1.substring(masSpace[newPlace]);
    return newStr1;
};
module.exports = concatOnPlace;