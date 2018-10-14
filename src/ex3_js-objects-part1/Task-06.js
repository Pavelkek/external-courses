'use strict'
function cloneDeep(object) {
    var result = {};
    var arr;
    var key;
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            if (typeof(object[key])==='object' && !Array.isArray(object[key])){
                result[key] = cloneDeep(object[key]);
            } else if (typeof(object[key])==='object' && Array.isArray(object[key])){
                arr = cloneDeep(object[key][0]);
                result[key] = [arr];
            } else {    
                result[key] = object[key];
            };
        };
    };
    return result;
}; 
module.exports = cloneDeep;

