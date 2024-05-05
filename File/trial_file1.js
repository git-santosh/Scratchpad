var fs=require('fs');

fs.open('info.txt','r',function(err,done){
	var buff=new Buffer(100000);
	fs.read(done,buff,0,100000,null,function(err,done){
		console.log(buff.toString('utf8',0,done));
		fs.close(done,function(){});
	});
});

/*function getBRGEmployee(filePath,done){
 fs.readFile(filePath,function(err,info){
 	if(err) return done(err);

 		fs.readFile('brgEmp.txt',function(err,brg){
 				if (err) return done(err);

 				compairEmp(info,brg);

 		});
 });
 function compairEmp(info,brg){
 	var brg=brg.toString().split('\n');
 	var info=info.toString().split('\n').filter(function(emp){
 		return brg.indexOf(emp) !== -1;
 	})
 	done(null,info);
 }
}
getBRGEmployee('info.txt',function(err,results){

	console.log(results);
});
*/