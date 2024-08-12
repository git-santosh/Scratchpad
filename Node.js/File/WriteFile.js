var fs=require('fs');

fs.writeFile('brgEmp.txt','development Team',function(err){

	if(err) return console.log(err);

	console.log('Write operation done \n content of file');
	fs.readFile('brgEmp.txt','utf8',function(err,read){
		console.log(read);
	});
});