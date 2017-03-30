
// First server 


// var http= require("http");

// function process_request(req,res){
// 	var body = "Thanks for calling..!!";
// 	var content_length=body.length;
// 	res.writeHead(200,{
// 		'Content_Length':content_length,
// 		'Content-Type':'text/plain'
// 	});
// 		res.end(body);

// }
// console.log("I'm waiting for all my work to finish.");
// var s= http.createServer(process_request);
// 	s.listen(8081);

	//-------------------------------------------------------------------//
	// file read code 

	// var fs =require('fs');
	// var file;
	
	// fs.open('Shiawase nara te wo.txt', 'r' , function(err,handle){
	// 	var buf = new Buffer(1000000);
		
	// 	fs.read(handle,buf,0,1000000,null,function(){
	// 		console.log(buf.toString('utf8'));
	// 		fs.close(handle,function(){});
	// 	});
	// });
	
		//-------------------------------------------------------------------//
	// file read code 

	// var fs = require('fs');
	// function FileObject(){
	// 	this.fileName = '';
	// 	this.fileExist =function(callback){
	// 		console.log('about to open file : '+this.fileName);
	// 		fs.open(this.fileName , 'r' , function(err,handle){
	// 			if (err) {
	// 				console.log("Can't open: " + this .filename);
	// 				callback(err);
	// 				return;
	// 			}
	// 			fs.close(handle,function(){});
	// 			callback(null,true);

	// 		});
	// 	}
	// }
	// var fo = new FileObject();
	// fo.fileName = "ember.js.docx";
	// fo.fileExist(function(err,handle){
	// 	if(err){
	// 		console.log("Aw, bummer: " + JSON.stringify(err));
	// 		return;
	// 	}
	// 	console.log("file exists!!!");
	// });

 //-------------------------------------------------------------------//

 	// function compute_intersection(arr1,arr2,callback){
 	// 	var results = [];
 	// 	for(var i=0; i<arr1.length; i++){
 	// 		for (var j =0; j<arr2.length; j++) {
 	// 			if (arr2[j] == arr1[i]){
 	// 				results[results.length] = arr1[j];
 	// 				break;
 	// 			}
 	// 		}
 	// 	}
 	// 	console.log(results);
 	// 	callback(null,results);
 	// }
 	//  var a= [103,343,345,6443,6434,64];
 	//  var b= [94,34,6,34,646,453,3466,3453,34533];
 	// compute_intersection(a,b,function(err,callback){
 	// 	if (err) {
 	// 		console.log("Error"+err.message);
 	// 	}
 	// 	else{
 	// 		console.log(callback);
 	// 	}
 		
 	// });


 //-------------------------------------------------------------------//
// file read code 
// var person ={
// 	fName : 'santosh',
// 	lName : 'suryawanshi',
// 	greet : function(){
// 		console.log('Hello ',this.fName , this.lName);
// 	}
// };
// function changeValue(d){
// 	d.fName = 'ganesh';
// 	d.lName = 'john';
// }
// person.greet();
// changeValue(person);
// person.greet();
//-------------------------------------------------------------------//
var http = require('http');
var fs = require('fs');
var url = require('url');
function handle_incoming_request(req,res){
	console.log("INCOMING REQUEST: "+req.method +" "+ req.url);
	load_album_list(function(err,albums){
		if(err){
			res.writeHead(200,{'Content-Type':"application/json"});
			res.end(JSON.stringify({err:null} )+ '\n');		
		}
		var out = {
			error: null,
			data : {albums:albums}
		}
		res.writeHead(200,{'Content-Type':"application/json"});
		req.parsed_url = url.parse(req.url, true);
		res.end(JSON.stringify(req.parsed_url)+ '\n');		
	});	
}

var s = http.createServer(handle_incoming_request);
s.listen(8081);


function load_album_list(callback){
	fs.readdir('album/',function(err,files){
		if(err){
			callback(err);
			return;
		}
		var only_dirs =[];
		for (var i= 0; i<files.length; i++) 
		{
			fs.stat('album/'+files[i], function(err,stats){
				if (stats.isDirectory) {
					only_dirs.push(files[i]);
				}
			});
		}
		callback(null,only_dirs);
	});
}