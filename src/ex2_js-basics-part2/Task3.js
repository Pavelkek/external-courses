'use strict'
var evenOrNot = function (arr){
    var even=0;
    var notEven=0;
    var zero=0;
    var i=0;
    for (i=0; i<arr.length; i++){
        if (arr[i]%2!==0 && arr[i]!==0){
            notEven++;
        } else if (arr[i]%2===0 && arr[i]!==0){
            even++;
        } else if (arr[i]===0){
            zero++;
        };
    };
    if(zero===0){
        console.log('Четных: '+even+'; Не четных: '+notEven);
    } else {
        console.log('Четных: '+even+'; Не четных: '+notEven+'; Нулей: '+zero);
    };
}
module.exports = evenOrNot;