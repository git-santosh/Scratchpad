var http= require("http");
var fs = require('fs');
var PORT = process.env.PORT || 3000;

function Handle_incoming_request(req,res){
	//var body = "Thanks for calling..!!";
	console.log('INCOMING REQUEST :'+req.method+''+req.url);
	//var content_length=body.length;
	var obj = req.url;
	console.log(obj.split('.'));
	res.writeHead(200,{
		//'Content_Length':content_length,
		'Content-Type':'application/json'
	});
	
	res.end(JSON.stringify({error:null})+'\n');

}
var s= http.createServer(Handle_incoming_request);
	s.listen(PORT);

	