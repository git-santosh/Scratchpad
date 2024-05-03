var http = require('http');

http.createServer(function(req,res){
	var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
	console.log('\n url : '+req.url+'\n path :'+path);
	switch(path){
		case '':
				res.writeHead(200,{'Content-Type':'application/json'});
				res.end('HomePage');
				break;
		case '/about':
				res.writeHead(200,{'Content-Type':'application/json'});
				res.end('About');
				break;
		default :
				res.writeHead(200,{'Content-Type':'application/json'});
				res.end('Not found');
				break;
	}
}).listen(3000);
console.log('server started on localhost:3000; press ctrl+c to terminate');