var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname,'/node_modules')))
app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

io.on('connection',function(client){
    console.log('Client Connected');

    client.on('join',function(data){
        console.log(data);
        client.emit('message',"Hello From Server");
    })
})
server.listen(3000, function(){
  console.log('listening on *:3000');
});