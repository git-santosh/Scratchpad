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
    });
    client.on('messages',function(data){
      console.log(data);
        //client.emit('broad', data);

        //What will happen now is that any event client are sending to the server will not get an event back
        client.broadcast.emit('broad',data); 
    });
})
server.listen(3000, function(){
  console.log('listening on *:3000');
});