const WebSocket = require('ws');
const config = require('./config.js')
const {webport,port} = config;
const portfinder = require('portfinder');
// portfinder.getPort(function(err,port){
//   startSocket(port);
// })
startSocket(webport)
function startSocket (port){
  console.log(port)
  const wss = new WebSocket.Server({port});

// Broadcast to all.

  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });

    ws.send('somethingfff');
  });
}
