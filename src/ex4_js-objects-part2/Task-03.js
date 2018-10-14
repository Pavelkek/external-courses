'use strict'
function delSpace (anyStr){
    var newStr = anyStr;
    var posFirst = newStr.indexOf(' ');
    var posLast;
    var pos = -1;
    if (posFirst !== -1){
        newStr = newStr.substring(0,posFirst) + newStr.substring(posFirst+1);
    };
    while ((pos = newStr.indexOf(' ', pos + 1)) !== -1) {
        posLast = pos;
    };
    if(posLast !== undefined){
        newStr = newStr.substring(0,posLast) + newStr.substring(posLast+1);
    };
    return newStr;
};
module.exports = delSpace;