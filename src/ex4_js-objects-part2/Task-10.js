'use strict'
function reverse (anyStr){
    var newStr = '';
    for (var i=anyStr.length-1; i>=0; i--){ // eslint-disable-line
        newStr += anyStr[i];
    };
    return newStr;
};
module.exports = reverse;