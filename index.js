const fs = require("fs");
var http = require('http');

fs.writeFile("message.txt","Hello Welcome to Nodejs", (err) => {
    if(err) throw err;
    console.log('The file has been saved!');
})

fs.readFile("./message.txt","utf-8",(err,data) => {
    if(err) throw err;
    console.log(data);
})



http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
