var fs = require('fs');


//appends the specified content at the end of the specified file
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });


  //Replaces the specified filee and content
  fs.writeFile('mynewfile.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });