'use strict'
var arrayLength = function (mas){
    var arr='';
    var i;
    for(i=0; i<mas.length; i++){
        arr+=(mas[i]+' ');
    };
    console.log(arr+'Число элементов: '+mas.length);
}
module.exports = arrayLength;