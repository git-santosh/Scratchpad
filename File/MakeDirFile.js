var fs=require('fs');

fs.mkdir('santosh',function (err) {
	// body...
	if(err) return;
	console.log('Directory Created');
})