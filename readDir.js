var fs=require('fs');
function callback(err,data)
	{
		console.log('data :',data);
	}
fs.readdir('C:/',callback);
