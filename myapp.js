var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var io =  require('socket.io')(http);
var express = require('express');
var ent = require('ent');

app.get('/', function(req, res){
  //look for css and js from the same directory with main.html
  app.use(express.static(__dirname));
  res.sendFile(path.join(__dirname, 'main.html'));

});

io.sockets.on('connection', function(socket,name) {
   	console.log('a user connected.');
   	socket.on('new_client', function(name){
   		name = ent.encode(name);
   		socket.username = name;
   		socket.broadcast.emit('new_client',name);
   		console.log(name);
   	});
 	socket.on('disconnect', function() {
    	console.log('a user disconnect!');
    });
});

http.listen(3000, function(){
  console.log('listening on 192.168.1.101:3000');
});