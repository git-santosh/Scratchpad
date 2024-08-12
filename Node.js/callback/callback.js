var fs = require('fs');

var cities = ['pune','mumbai','delhi','channei','banglor' , 'hydrabad' ,'noida'];

cities.forEach(function callback(city){
	console.log(city);
});

//other way to call callback (inline function to define callback)
console.log('-------------------------------------');
function callback(city){
	console.log(city)
}
cities.forEach(callback);

//
console.log('-------------------------------------');
var timestamp = new Date().toString();
var containts;
fs.writeFileSync('date.txt',timestamp)

containts = fs.readFileSync('date.txt');
console.assert(timestamp == containts);
console.log('Reading file is completed');