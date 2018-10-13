'use strict'
function find (property,object){
    var result;
    if (object.hasOwnProperty(property)){
    } else {
        result = +(property in object);
    };
return result;
};
module.exports = find;