/*
 * @Author: mikey.sehui 
 * @Date: 2019-05-15 14:52:43 
 * @Last Modified by: mikey.sehui
 * @Last Modified time: 2019-06-14 10:24:15
 */
// http.Server大概每秒可以接入3400个请求，而net.Server可以接入大概5500个请求
var http = require('http');//服务器
var fs = require('fs');//文件
var path = require('path');//路径
const url = require('url');

let express = require('express');//框架
let app = express();
const bodyParser = require('body-parser');
// var a = 'http://www.xr.com/a/b/index.html?a=1&b=2';
// console.log("TCL: url", url.parse(a,true))
// console.log("TCL: path", path.resolve(_dirname,'./vue/index.html'))
http.createServer(function (req, res) {
    if(req.method==='OPTIONS'){
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.statusCode=200;
      }
    const a = fs.readFileSync('./vue/index.html')
    // console.log(a)
    res.writeHead(200);
    res.write(a)
    res.end()
}).listen(12306)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const a = fs.readFileSync('./vue/index.html')
// const a = fs.readFile('./vue/index.html', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("异步读取: " + data.toString());
// })
app.all('*', function (req, res, next) {
    let origin = req.headers.origin;
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.write(a)
    next('a');
    // res.send(a)
    res.end()
})

// app.get('/formdata', function (req, res) {

//     //    console.log(req.body);    
//     res.send(a)
//     // res.write(a)
// })

app.listen(99);

//copy文件
function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}

//边复制边写
function copyPipe(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

function main(argv) {
    // copy('C:\\Users\\Small\\Desktop\\index.json', 'E:\\myDemo\\node\\node-copy.json');
    copyPipe(argv[0], 'E:\\myDemo\\node\\node-copy.js')
}
// console.log("TCL: process.argv", process.argv.slice(2))
// main(process.argv);
const BIN = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);//二进制转字符串  这是与String对等的全局构造函数
const STR = new Buffer('hello','utf-8');
const DUP = new Buffer(BIN.length);
BIN.copy(DUP)
console.log(BIN,STR,BIN.toString('utf-8'),DUP)

// stream数据流  pipe内部实现方式
var src = process.argv[0];
var dst = 'E:\\myDemo\\node\\node-copy.js';
var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);
// rs.on('data', function (chunk) {//在处理数据前暂停数据读取，并在处理数据后继续读取数据
//     rs.pause();
//     doSomething(chunk, function () {
//         rs.resume();
//     })
// })

// rs.on('end', function () {
//     cleanUp();
// })

// rs.on('data', function (chunk) {
//     ws.write(chunk) === false && rs.pause();
// })
// rs.on('end', function (chunk) {
//     ws.end();
// })

// ws.on('drain', function () {
//     rs.resume();
// })

// function doSomething (chunk, fn) {
//     console.log(chunk)
//     fn();
// }

var status = http.STATUS_CODES;
console.log("TCL: status", status)

// 深度优先，意味着到达一个节点后，首先接着遍历子节点而不是邻居节点。先序遍历，意味着首次到达了某节点就算遍历完成，而不是最后一次返回某节点才算数

function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}

travel('E:\\myDemo\\node\\vue', function (pathname) {
    console.log(pathname);
})
