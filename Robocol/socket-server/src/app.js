const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

console.log('Opening server...');

io.on("connection", socket =>
{
  console.log('Connected.');
  var contador = 0;

  socket.on("getMensaje", () =>
  {
    console.log('Message.');
    contador++;
    socket.emit("mensaje", "Este es el mensaje número " + contador);
  });

  //Prueba para el brazo
  socket.on('change_value', (object) =>
  {
    console.log('Gripper change.');
    contador++;
    socket.emit('gripper_value', contador);
  });
});

http.listen(4444);