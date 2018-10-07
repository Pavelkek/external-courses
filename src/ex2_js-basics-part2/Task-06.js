'use strict'
var simpleOrComplex = function (num){
    var i;
    var result;
    if (num>1000 || num<0){
        result = 'Данные неверны';
    } else if (num===1){
        result = 'Единица не относятся ни к простым ни к составным числам';
    } else if (num===0){
        result = 'Ноль не натуральное число';
    } else {
        for (i=2; i<=num; i++){
            if (num%i===0 && i!==num){
                result = 'Число '+ num+' - составное число';
                break;
            } else if (i===num){
                result = 'Число '+ num+' - простое число';
            };
            if(i>2){
                i++;
            };
        };
    };
    return result;
}
module.exports = simpleOrComplex;