'use strict'
function lowerCamelCase(anyStr,place){
    var newStr = anyStr;
    var newPlace = place;
    newStr = newStr[0].toLowerCase() + newStr.substring(1,newPlace-1) + newStr.substring(newPlace); 
    return newStr;
};
module.exports = lowerCamelCase;