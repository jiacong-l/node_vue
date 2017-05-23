/**
 * Description:客户端socket
 * User: 赵一鸣
 * Date: 2017/5/23
 */

var net = require('net');
var client = new net.Socket();
var readline = require('readline');
var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

var content = '';

rl.setPrompt('>');

rl.on('line', function(data){
    client.connect('65520', 'localhost', function(){
        client.write(data, 'UTF8', function(){
            console.log('正在向服务端发送数据！');
        })
    });
});

client.on('error', function(error){
    console.log(error);
});


