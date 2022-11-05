const app = require('express')()
const server = require('http').createServer(app);
server.listen(3000);

const socketio = require('socket.io')
const io = socketio.listen(server)