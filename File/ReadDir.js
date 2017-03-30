var fs=require('fs');

fs.readdir('album',function (err,files) {
	// body...
	if(err){
		console.log(err);
		return;
	}
	files.forEach(function(file){
		console.log(file);
	})
})