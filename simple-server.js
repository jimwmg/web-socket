const WebSocket = require('ws');
const config = require('./config.js')
const path = require('path')
const {webport,port} = config;
const fs = require('fs');


startSocket(webport);
function createWatch(filePath,ws){
  fs.watch(filePath,function(){
    const text = fs.readFileSync(filePath,'utf-8');
    ws.send(text);
  })
}
function startSocket (port){
  console.log(port)
  const wss = new WebSocket.Server({port});
  wss.on('connection', function connection(ws) {
    const filePath = path.resolve(__dirname,'./a.text')
    createWatch(filePath,ws);
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });

    ws.send('somethingfff');
  });
}
