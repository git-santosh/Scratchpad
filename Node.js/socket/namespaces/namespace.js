var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname,'/node_modules')))
app.get('/', function(req, res){
  res.sendFile(__dirname+'/namespace.html');
});

io.on('connection',function(socket){
    socket.on('join',function(data){
        console.log(data);
        socket.username = data.username;
         socket.broadcast.emit('join',{username :data.username,socket:socket.id});
    });
    socket.on('ping', function(){
        socket.broadcast.emit('ping', {username: socket.username});
    });
    socket.on('privatePing',function(data){
        console.log('private '+data);
        io.sockets.connected[data.socket].emit('ping',{username: socket.username, priv: true});
    });
    
})
io.of('/vip').on('connection', function(socket){
        socket.on('join', function(data){
             socket.username = data.username;
             socket.broadcast.emit('join', {username: data.username, socket:socket.id});
        });
        socket.on('ping', function(){
            socket.broadcast.emit('ping', {username: socket.username});
        });
        socket.on('privatePing', function(data){
            io.of('/vip').connected[data.socket].emit('ping', {username:socket.username, priv: true});
        });
    });

    server.listen(4000, function(){
  console.log('listening on *:4000');
});