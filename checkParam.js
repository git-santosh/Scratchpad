var fs = require('fs');
var PORT = process.env.PORT || 3000;
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-type' : 'text/plain'});
    console.log('----',req.url);
  if('txt' == req.url.split('.')[1]){
	var read = fs.readFileSync(__dirname + "/python.txt");
	res.end(read.toString());
 }
 else
 {
    res.end('Hello World!!');
 }
}).listen(PORT);


console.log('Server Running at port ' + PORT);
