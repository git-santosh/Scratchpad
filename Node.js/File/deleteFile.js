var fs=require('fs');

fs.unlink('npm-debug.log',function (argument) {
	// body...
	if(argument) return console.log(argument);
	console.log('file Deleted successfully ')
})