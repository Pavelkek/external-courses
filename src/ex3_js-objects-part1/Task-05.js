'use strict'
function clone(object) {
    var result = {};
    var key;
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            result[key] = object[key]; 
        };
    };
    return result;
};
module.exports = clone;