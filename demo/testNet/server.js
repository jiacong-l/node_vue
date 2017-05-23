/**
 * Description:服务端socket
 * User: 赵一鸣
 * Date: 2017/5/23
 */

var net = require('net');

var server = new net.Server();

server.listen('65520', 'localhost', function(){
    console.log('server socket is listened!');
});

server.on('error', function(error){
    console.log(error);
});

server.on('connection', function(socket){
    console.log(socket);
    socket.on('data', function(data){
        console.log(data.toString());
    });
});

process.on('oncaughtException', function(error){
    console.log(error);
});