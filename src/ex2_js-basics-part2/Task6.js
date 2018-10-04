'use strict'
var simpleOrComplex = function (num){
    var i;
    if (num>1000 || num<0){
        console.log('Неверные данные');
    } else if (num===1){
        console.log('Единица не относятся ни к простым ни к составным числам');
    } else if (num===0){
        console.log('Ноль не натуральное число');
    } else {
        for (i=2; i<=num; i++){
            if (num%i===0 && i!==num){
                console.log('Число '+ num+' - составное число');
                break;
            } else if (i===num){
                console.log('Число '+ num+' - простое число');
                return;
            };
            if(i>2){
                i++;
            };
        };
    };
}
module.exports = simpleOrComplex;