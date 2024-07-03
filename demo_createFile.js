var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

//Append specified content to a file or create a new file

fs.appendFile('mynewfile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//Create a file or open file for writing
fs.open('mynewfile1.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});


//Replaces the specified file and content
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });