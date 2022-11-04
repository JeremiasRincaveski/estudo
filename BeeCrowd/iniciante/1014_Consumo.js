var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
x = parseInt(lines.shift())
y = parseFloat(lines.shift())
medio = x / y
console.log(medio.toFixed(3) + ' km/l')