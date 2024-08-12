var fs = require('fs');
var file = './package.json' ;
function readPackageFile(fileName,result){
	//using simple file system
	// fs.readFile(fileName,function(err,data){

	// 	if(err){
	// 		return console.log("file not found");
	// 		result(null,err);
	// 	}
	// 	else{
	// 		 result(null,data.toString());
	// 	}
	// });
	
//using promise 
	return new Promise((resolve,reject) =>{
		fs.readFile(fileName,(err,data) =>{
			if(err){
				reject(err);
				return result(err);
			}
			resolve(data);
			return result(null,data.toString());
		});
	
	});
	
}
readPackageFile(file,function(err,result){
	console.log(result);
});
