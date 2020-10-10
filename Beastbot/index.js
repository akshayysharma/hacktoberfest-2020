'use strict';

var apiai = require('apiai');
var APIAI_TOKEN =apiai("5afc4bdf601046b39972ff3866cca392");
const APIAI_SESSION_ID = "chatbot-clvxfh";

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views')); 
app.use(express.static(__dirname + '/files')); 

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port %d ', server.address().port);
});

const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
});




app.get('/', (req, res) => {
  res.sendFile('index.html');
});

io.on('connection', function(socket) {
  socket.on('chat message', (text) => {
    console.log('Message: ' + text);

    

    let apiaiReq = APIAI_TOKEN.textRequest(text, {
      sessionId: APIAI_SESSION_ID
    });

    apiaiReq.on('response', (response) => {
      let aiText = response.result.fulfillment.speech;
      console.log('Bot reply: ' + aiText);
      socket.emit('bot reply', aiText);
    });

    apiaiReq.on('error', (error) => {
      console.log(error);
    });

    apiaiReq.end();

  });
});
