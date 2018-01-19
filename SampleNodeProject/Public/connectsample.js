var connectObject = require('connect');
var http = require('http');

//var http = httpObject();
var connect = connectObject();


function OnResponse(request,response)
{
    if(request.method == "GET" && request.url =="/")
    {

    }
    else
    {
        response.writeHead(404, {"Content-type":"text/plain"});
        response.write("Page not found");
        response.end();
    }
}

function OnProfile(request,response)
{
    response.writeHead(200,{"Connect-type":"text/plain"});
    response.write("In Profile");
    response.end();

}

connect.use('/profile', OnProfile);
connect.use('/',OnResponse);

http.createServer(connect).listen(8080);
console.log("server started !!!!");