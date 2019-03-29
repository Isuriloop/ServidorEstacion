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
  console.log("Entro")
  socket.on('bmp', function (datos) {
    console.log(datos);
   bmp =datos;
    
   }
  );
  socket.emit('bmpreceive',bmp);

  socket.on('sendData', function (data) {
    console.log(data);
    mesage=data;
  });

 socket.emit('news',mesage);
 
});