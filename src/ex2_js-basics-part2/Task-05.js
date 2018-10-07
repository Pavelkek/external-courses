'use strict'
var maxElement = function (arr){
    var i;
    var max=arr[0];
    for (i=0; i<arr.length; i++){
        if (arr[i]>max){
            max=arr[i];
        };
    };
    return max;
}
module.exports = maxElement;