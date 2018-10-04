'use strict'
var equal = function (arr){
    var i;
    if (arr.length===0){
        console.log(false);
    } else if (arr.length===1){
        console.log(true);
    } else {
        for (i=0; i<arr.length-1; i++){
            if (arr[i]!==arr[i+1]){
                console.log(false);
                break;
            } else if (i+2===arr.length){
                console.log(true);
            };
        };
    };
}
module.exports = equal;