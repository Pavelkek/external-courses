'use strict'
var arrayLength = function (mas){
    var arr='';
    var i;
    for(i=0; i<mas.length; i++){
        arr+=(mas[i]+' ');
    };
    for(i=0; i<mas.length; i++){
    console.log(arr[i]);
    };
    console.log('Число элементов: '+mas.length);
}
module.exports = arrayLength;