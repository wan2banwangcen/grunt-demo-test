const add = require('./calc.js');

var x = process[2] || 1,
    y = process[3] || 1;

console.log(`${x} + ${y} = ${add(x,y)}`);
