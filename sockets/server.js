const express = require('express');
const app = express()
const server = require('http').createServer(app);
server.listen(3000);

app.use(express.static('public'))

const { Server } = require('socket.io'); 
const io = new Server(server);
io.listen(server);

io.on('connect', function(socket){
    console.log('nueva conexion id: ' + socket.id);
    socket.on('datos_usuario', function(datos){
        console.log('correo: ' + datos.correo);
        io.emit('nuevo_correo', { correo: datos.correo});
    });
})