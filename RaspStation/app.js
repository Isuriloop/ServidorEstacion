var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3002);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


var mesage;
var bmp;
io.on('connection', function (socket) {

  socket.on('bmp', function (dato) {
    console.log(dato);
   bmp =dato;
    
   }
  );
  socket.emit('bmpreceive',bmp);

  socket.on('my other event', function (data) {
   console.log(data);
   mesage =data;
   
  }
 );
 socket.emit('news',mesage);
 
});