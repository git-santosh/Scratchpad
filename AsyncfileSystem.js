var fs=require('fs'),http=require('http');
var file='brgEmp.txt';
function getFileData(FileName,callResult)
{
fs.readFile(FileName,function(err,result){
	if(err)
	{
		console.log('file not found');
		callResult(err);
		return;
	}
	callResult(null,result.toString());
});
}
getFileData(file,function(err,result){
		console.log(result);
})

