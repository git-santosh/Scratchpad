var fs = require('fs');
var file;
var buff= new Buffer(100000);
fs.open('info.txt','r',function(handle){ // this will generate an error.
	file =handle;
});
fs.read(file,buffer,0,100000,null,function(){
	console.log(buff.toString());
	file.close(file,function(){});
});
//The file variable is not set until the file has been
//opened and the handle to it has been received in the callback specified as the third parameter
//to the fs.open function. Thus, it is still undefined when you try to call the fs.read function
//with it immediately afterward

//Fixing this program is easy:

fs.open('info.txt', 'r',function (err, handle) { 
	var buf = new Buffer(100000);
	fs.read(handle, buf, 0, 100000, null,function (err, length) {
		console.log(buf.toString('utf8', 0, length));
		fs.close(handle, function () { /* don't care */ });
	});
});
//event queue;


