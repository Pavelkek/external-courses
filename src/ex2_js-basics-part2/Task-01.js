'use strict'
var strOrNumb = function (a){
    var type=typeof(a);
    var result;
    if (type==='string'){
        result = 'string';
    } else if (!isNaN(a) && type === 'number'){
        result = 'number';
    };
    return result;
}
module.exports = strOrNumb;
