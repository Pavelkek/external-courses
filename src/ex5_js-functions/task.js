'use strict'
var Calculator = calculator();
function calculator() {
    var a = 0;
    return {
        add : function add(b) {
            a += b === undefined ? 0 : b;
            return add;
        },
        subtract : function subtract(b) {
            a -= b === undefined ? 0 : b;
            return subtract;
        }, 
        multiply : function multiply(b) {
            a *= b === undefined ? 1 : b;
            return multiply;
        },
        divide : function divide(b) {
            a /= b === undefined ? 1 : b;
            return divide;
        },
        getResult : function getResult() {
            return a;
        },
        reset : function reset() {
            a = 0;
            return a;
        },
    };
};
module.exports = Calculator;