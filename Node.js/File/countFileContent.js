const fs = require('node:fs');

const file = fs.readFileSync('./file-operations.txt','utf-8')
const lines = file.split('\n');

console.log('Sentences : '+ lines.length); // Array of lines
console.log('characters : '+ file.length)
console.log('words : '+ WordCount(file))

function WordCount(str) {
    return str.split(' ')
           .filter(function(n) { return n != '' })
           .length;
}