var fs = require('fs');
var data='';
fs.readFile('info.txt','utf8',function(err,data){
	if(err)	console.log(err);
	data=data;
	//console.log(data);
});

var textFile= 'test.txt';
fs.writeFile(textFile,data,function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log('file copied to',textFile);
	}
});

var data = fs.readFileSync(textFile,'utf8');
console.log(data);

fs.appendFile('info.txt','ganesh \n kiran \n',function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log('content appended to file');
	}
});