'use strict'
function bigFirst (anyStr){
    var newStr;
    newStr = anyStr[0].toUpperCase() + anyStr.substring(1); 
    return newStr;
};
module.exports = bigFirst;