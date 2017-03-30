var http = require('http'),fs=require('fs');

function serveStaticFile(res,path,contentTyp,responseCode){
	if(!responseCode) responseCode=200;

	fs.readFile(__dirname+path,function(err,data){
		if(err){
			res.writeHead(500,{'Content-Type':'text/plain'});
			res.end('500 - Internal Error');
		}
		else{
			res.writeHead(responseCode,{'Content-Type':contentTyp});
			res.end(data);
		}
	});
}

http.createServer(function(req,res){
	var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
	switch(path){
		case '':
				serveStaticFile(res,'/public/home.html','text/html');
				break;
		case '/about':
				serveStaticFile(res,'/public/about.html','text/html');
				break;
		case '/img/logo.png' :
				serveStaticFile(res,'/img/logo.png','image/jpeg');
				break;
		default :
				serveStaticFile(res,'/public/404.html','text/html',400);
				break;
	}
}).listen(3000);
console.log('server started on localhost:3000; press ctrl+c to terminate');