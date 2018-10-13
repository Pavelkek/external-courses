'use strict'
function shortStr (anyStr, leng){
    var newStr = anyStr;
    var newLeng = leng;
    if (newStr.length > newLeng){
        newStr = newStr.substring(0,newStr.length - newLeng) + '…';
    };
    return newStr;
};
module.exports = shortStr;