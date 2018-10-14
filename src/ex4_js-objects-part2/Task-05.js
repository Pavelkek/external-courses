'use strict'
function findStr (anyStr1,anyStr2){
    return anyStr1.indexOf(anyStr2)>-1 && anyStr2 !=='' ? true : false;
};
module.exports = findStr;