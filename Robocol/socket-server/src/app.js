const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on("connection", socket => {

  var contador = 0;

  socket.on("getMensaje", () => {
    contador++;
    socket.emit("mensaje", "Este es el mensaje número " + contador);
  });

  //Prueba para el brazo
  socket.on('change_value', (object) => {
    contador++;
    socket.emit('gripper_value', contador);
  });


});


http.listen(4444);