var http = require('http');

function PageNotFound(response)
{
    response.writeHead(404, {"Content-type":"text/pain"});
    response.write("Requested Page Not Found");
    response.end();
}
function ResonseServer(request,response)
{
    console.log("Attemp to server is made" + request.url);
    if(request.method == 'GET' && request.url == '/') {

        response.writeHead(200, {"Content-type": "text"});
        response.write("<h1>My first server request</h1>")
        response.end();
    }
    else
    {
        PageNotFound(response);
    }
}

http.createServer(ResonseServer).listen(8080);
console.log("server is up and running");
