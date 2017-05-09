 var http = require('http');
 var fs = require('fs');
// function handle_request(req,res){
//     var body = "this is the first node program written in Dell's laptop";
//     var content_length = body.length;
//     res.writeHead(200,{
//         'content_length':content_length,
//         'content_type': 'text/pain'
//     });
//     res.end(body);
// }
// var port = process.env.port || 8888 ;
// http.createServer(handle_request).listen(port, function(){
//     console.log('server is running on port '+port);
// });
// hit url : http://localhost:8080/content/text.html
function handle_request(req,res){
    var body;
    if(req.method.toLowerCase() == 'get' && req.url.substring(0, 9) == '/content/'){
         serve_static_file(req.url.substring(9), res);
    }
    else{
        res.writeHead(404,{"Content-Type":"application/json" });
        var out = {error:"not found", message :"'" + req.url + "' not found" };
        res.end(JSON.stringify(out));
    }
    
}
function serve_static_file (file, res) {
    var rs = fs.createReadStream(file);
    var ct = content_type_for_path(file);
    res.writeHead(200, { "Content-Type" : ct });

    rs.on('readable',function(){
        var d = rs.read();
        if (d) {
            if (typeof d == 'string')
                 res.write(d);
             else if (typeof d == 'object' && d instanceof Buffer)
                res.write(d.toString('utf8'));
        }
        
    });
    
    rs.on('end',function(){
        res.end();
    });
}
function content_type_for_path (file) {
return "text/html";
}
var server = http.createServer(handle_request);

server.listen(8080,function(){
    console.log('server is running on port 8080');
})

