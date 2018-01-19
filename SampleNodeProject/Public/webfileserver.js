var http = require('http');
var fs = require('fs');

function page404NotFound(response)
{
    response.writeHead(404,{"Content-type":"text/pain"});
    response.write("Page is not available");
    response.end();
}

function OnRequest(request,response)
{
    if(request.method == "GET" && request.url == '/')
    {
        response.writeHead(200, {"Content-type":"text/html"})
        try {
            var stream = fs.createReadStream("./index.html").pipe(response);

        }catch(e)
        {
            console.log(e);
        }
    }
    else
    {
        page404NotFound(response);
    }
}

http.createServer(OnRequest).listen(8080);
console.log("server is running");