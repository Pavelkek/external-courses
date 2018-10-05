'use strict'
var strOrNumb = function (a){
    var type=typeof(a);
    if (type==='string'){
        console.log('Это строка');
    } else if (!isNaN(a) && type === 'number'){
        console.log('Это число');
    };
}
module.exports = strOrNumb;
