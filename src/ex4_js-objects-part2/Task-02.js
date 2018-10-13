'use strict'
function nullObj (name){
    var name1 = name;
    name1 = Object.create(null);
    return name1;
};
module.exports = nullObj;