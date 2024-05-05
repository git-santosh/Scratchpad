
var path= require('path');

var hello = 'Hello world form santosh';
// var str=hello.slice(17);
// console.log(`Rocking from ${str}`);
// console.log(__dirname);
// console.log(__filename);

console.log(`Rocking from ${path.basename(__filename)}`);
console.log('process : - '+process.argv);

function grab(flag){
    var index=process.argv.indexOf(flag);
    return (index === -1) ? null :process.argv[index+1]; 
}
var user= grab('--user');
var greeting =grab('--greeting');

if(!user || !greeting){
    console.log('you blew it ');
}else{
    console.log(`welcome ${user} ${greeting}`);
}