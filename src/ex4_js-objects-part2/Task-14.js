'use strict'
function randomizer (min,max){
    return Math.random() * (max-min) + min;
};
module.exports = randomizer;