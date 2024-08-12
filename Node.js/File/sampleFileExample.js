var fs=require('fs');
var file='info.txt';


/*fs.open(file,'r',function(err,handle){
	console.log('file is about to open '+file);
	if(err){
		console.log('Error: ('+err.message+')');
		return;
	}
	console.log(file+' is open \n'+'below are the containts \n');
	var buff=new Buffer(100000);
	fs.read(handle,buff,0,100000,null,function(err,length){
		console.log(buff.toString('utf8',0,length));
		fs.close(handle,function(){});
	});
});*/

fs.open('info.txt','r',function(e,handle){
	var buff= new Buffer(100000);

		fs.read(handle,buff,0,100000,null,function(er,length){
			console.log(buff.toString('utf8', 0, length));
			fs.close(handle, function () {  });
		});
});


