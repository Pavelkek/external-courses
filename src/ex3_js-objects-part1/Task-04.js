'use strict'
function setNonExistedProperty(prop, object) {
    var propFunk=prop;
    var objectFunk=object;
    if (propFunk in objectFunk){
    } else {
        objectFunk[propFunk] = 'new';
    };
    return objectFunk; 
};
module.exports = setNonExistedProperty;