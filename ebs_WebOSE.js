const express = require("express");
const app = express();
const router = express.Router;
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', function(socket){


});


io.on('asleep', function(data) {
  console.log('Message from Client: ' + data);
});


http.listen(80);