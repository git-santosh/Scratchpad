var fs=require('fs');
function callback(err,data)
	{
		console.log('data :',data);
	}
fs.readdir('C:/',callback);



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