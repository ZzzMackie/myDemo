/*
 * @Author: mikey.sehui 
 * @Date: 2019-05-15 14:52:43 
 * @Last Modified by: mikey.sehui
 * @Last Modified time: 2019-05-23 15:09:21
 */

var http = require('http');
var fs = require('fs');
var path = require('path');
const url = require('url');
let express = require('express');
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