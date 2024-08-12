 var http = require('http');
 var fs = require('fs');
 var path = require('path');
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
    rs.on('error',function(e){
        res.writeHead(404, { "Content-Type" : "application/json" });
        var out = { error: "not_found",message: "'" + file + "' not found" };
        res.end(JSON.stringify(out) + "\n");
        return;
    });
}
function content_type_for_path (file) {
    var ext = path.extname(file);
    switch(ext){
        case '.html': return "text/html";
        case ".js": return "text/javascript";
        case ".css": return 'text/css';
        case '.jpg': 
        case '.jpeg': return 'image/jpeg';
        default: return 'text/plain'; 
    }

}
var server = http.createServer(handle_request);

server.listen(8080,function(){
    console.log('server is running on port 8080');
})

