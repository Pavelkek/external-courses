'use strict'
function upAllFirst (anyStr){
    var pos = -1;
    var newStr = anyStr;
    newStr = newStr[0].toUpperCase() + newStr.substring(1);
    while ((pos = newStr.indexOf(' ', pos + 1)) !== -1) {
        newStr = newStr.substring(0,pos+1) + newStr[pos+1].toUpperCase() + newStr.substring(pos+2);
    };
    return newStr;
};
module.exports = upAllFirst;