// var readline = require('readline');
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Type OK to continue.', function(ans0) {
//   if (ans0 == 'OK') {
//     rl.question("What is your characters's name?", function(ans) {
//       console.log('\nHello ' + ans);
//       rl.close();
//     })
//   }
  
// });



var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('santosh.txt')
});

var lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});
