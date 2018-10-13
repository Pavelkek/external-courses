'use strict'
function quantity (anyStr){
    var o = Object.create(null);
    for (var i=0; i<anyStr.length; i++){ // eslint-disable-line  
        if (anyStr[i] in o){
            o[anyStr[i]]++;
        } else {
            o[anyStr[i]]=1;
        };
    };
    for (var key in o){  // eslint-disable-line
        console.log(key,o[key]);
    };
};
module.exports = quantity;