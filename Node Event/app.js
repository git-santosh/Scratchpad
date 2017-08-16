var http = require('http');

var server = http.createServer();
var data ="http.createServer([requestListener]), It says that requestListener is a function which is automatically added to the ‘request’ event.";
server.on('request',(req,res) =>{
	  req.on('data', function (chunk) { console.log(chunk.toString()); });
 
	  req.on('end', function() {
		res.write('Request Completed!');
		res.end();
	  })
});

server.listen(3000);