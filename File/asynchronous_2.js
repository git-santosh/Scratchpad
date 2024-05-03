var fs=require('fs');
function fileObject(){
	this.fileName='';
	this.fileExist=function(callback){
		console.log('About to open '+this.fileName);
		fs.open(this.fileName,'r',function(err,handle) {
			// body...
			if (err) {
				console.log('cant open '+this.fileName);
				callback(err);
				return;

			}
			fs.close(handle,function(){});
			callback(null,true);
		});
	}		
}
var fo = new fileObject();
fo.fileName="info.txt";
fo.fileExist(function(err,result){
		if(err){
			console.log('aq, bummer '+JSON.stringify(err));
			return;
 	}
 	console.log('file exist');
});
