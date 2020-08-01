const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on("connection", socket => {

  var contador = 0;

  socket.on("getMensaje", () => {
    contador++;
    socket.emit("mensaje", "Este es el mensaje número " + contador);
  });
});


http.listen(4444);