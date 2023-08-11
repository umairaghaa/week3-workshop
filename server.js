var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/www'));

let server = http.listen(3001,function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on: "+ host + "port: " +port);
});