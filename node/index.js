/*
 * @Author: mikey.sehui 
 * @Date: 2019-05-15 14:52:43 
 * @Last Modified by: mikey.sehui
 * @Last Modified time: 2019-05-16 12:07:57
 */

var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (request, response) {
    const a = fs.readFileSync('./vue/index.html')
    response.writeHead(200);
    response.write(a)
    response.end()
}).listen(12306)