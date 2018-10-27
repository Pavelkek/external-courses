'use strict'
function slice (array, begin, end) {
    var arrayf = [];
    var beginf = begin;
    var endf = end;
    if (arguments.length === 3){
        if (beginf>=0 && endf>=0){
            for (beginf;beginf<endf;beginf++){
                arrayf.push(array[beginf]);
            };
        } else {
            for (beginf;array.length+endf-1>array.length+beginf-1;endf--){
                arrayf.push(array[-endf-1]);
            };
        };
    } else if (arguments.length === 2){
        if (beginf>=0){
            for (beginf;beginf<array.length;beginf++){
                arrayf.push(array[beginf]);
            };
        } else {
            for (beginf;array.length+beginf>0;beginf--){
                arrayf.push(array[-beginf]);
            };
        };
    } else {
        arrayf = array;
    };
    return arrayf;
};
module.exports = slice;