var fs = require('fs');

fs.writeFile("./test.txt","some text for testing", callback);
//console.log(fs.readFile("./test.txt").toString());

var css = fs.readFile('./test.txt',readcallback);


function readcallback(err,data)
{
    console.log(data);
}
function callback(response)
{
//console.log(fs.readFile("./test.txt"));
}