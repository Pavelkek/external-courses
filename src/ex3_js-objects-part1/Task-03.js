'use strict'
function hasProperty(prop, object) {
    var result;
    if (prop in object){
        result = true;
    } else {
        result = false;
    };
    return result;
};
module.exports = hasProperty;