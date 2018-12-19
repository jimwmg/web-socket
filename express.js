const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const app = express();
const config = require('./config.js')
const {port} = config;
app.use(function(request,response){
  const data = fs.readFileSync('./index.html','utf-8')
  response.writeHead(200,{"Content-Type":"text/html"});
  response.end(data);
})
const server = http.createServer(app).listen(3000);
