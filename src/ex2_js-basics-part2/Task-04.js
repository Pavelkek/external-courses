'use strict'
var equal = function (arr){
    var i;
    var result;
    if (arr.length===0){
        console.log(false);
    } else if (arr.length===1){
        console.log(true);
    } else {
        for (i=0; i<arr.length-1; i++){
            if (arr[i]!==arr[i+1]){
                result = false;
                break;
            } else if (i+2===arr.length){
                result = true;
            };
        };
    };
    return result;
}
module.exports = equal;