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
            for (beginf;array.length+endf>array.length+beginf;endf--){
                arrayf.push(array[-endf]);
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