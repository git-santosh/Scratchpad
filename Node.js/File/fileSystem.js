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
	fs.stat(FileName,function(err,fileInfo)
	{
		console.log('\n file is exist :'+fileInfo.isFile());
		//console.log('\n Directory is exist :'+fileInfo.isDirectory());
		//console.log('\n file is Block Device :'+fileInfo.isBlockDevice());
		console.log(fileInfo);
	});
});
}
getFileData(file,function(err,result){
		console.log(result);
})

