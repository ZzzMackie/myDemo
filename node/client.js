var net = require('net');//服务器
const PORT = 12306;
const HOST = '127.0.0.1'; 
var _http = require('http');//服务器

var client = net.createConnection(PORT, HOST);

client.on('connect', function(){
    console.log('客户端：已经与服务端建立连接');
});

client.on('data', function(data){
    console.log('客户端：收到服务端数据，内容为{'+ data +'}');
    _http.createServer(function (req, res) {
        if(req.method==='OPTIONS'){
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.statusCode=200;
          }
        // console.log(a)
        res.writeHead(200);
        res.write(data)
        res.end()
    }).listen(12307)
});

client.on('close', function(data){
    console.log('客户端：连接断开');
});

client.end('你好，我是客户端');