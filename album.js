var http= require("http"),fs=require("fs");

function Handle_incoming_request(req,res){
	
	console.log('INCOMING REQUEST :'+req.method+''+req.url);
	
	load_abum_list(function(err,album){

	if(err){
		res.writeHead(503,{
			'Content-Type':'application/json'
		});
		res.end(JSON.stringify(err)+'\n');
		return;
	}

	var out={error:null,data:{album:album}};
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify(out)+'\n');


	});

}

	function load_abum_list(done){
		var filePath='album';
		fs.readdir(filePath,function(err,file){
				if(err){
					done(err);
					return;
				}
				var only_dir=[];
				for(var i in file){
						filePath=filePath+'/'+file[i];
								
						fs.stat(filePath,function(err,stats){
							if(stats.isDirectory()){
							only_dir.push(file[i]);
						}
						});
						
						
				}
				
				done(null,only_dir);
		});
	}
var s= http.createServer(Handle_incoming_request);
	s.listen(8082);