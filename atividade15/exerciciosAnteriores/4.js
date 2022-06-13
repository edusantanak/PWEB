const fs = require('fs');
const data = fs.readFileSync('teste.txt');

console.log(data.toString());