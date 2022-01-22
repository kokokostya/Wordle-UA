var fs = require('fs');

var arr = fs.readFileSync('src/apo-incl.csv')
    .toString()
    .split('\n')
    .map(e => e.trim())

var file = fs.createWriteStream('data.js');
file.write("[");
arr.forEach(function(v) { file.write('"' + v + '",'); });
file.write("]");
file.end();