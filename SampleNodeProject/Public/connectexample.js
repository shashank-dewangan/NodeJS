var connect  = require('connect');
var http = require('http');

var app = connect();
function GetProfile(request,response)
{
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("In Profile Page");
    response.end();
}

function GetDepartment(request,response)
{
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("In Department Page");
    response.end();
}
function OnResponse(request,response)
{
    if(request.method == "GET" && request.url == "/")
    {

    }
    else
    {
        response.writeHead(404, {"content-type": "text/pain"});
        response.write("404 Page not found");
        response.end();
    }
}
app.use('/Profile', GetProfile);
app.use('/Department', GetDepartment);
app.use('/', OnResponse);
http.createServer(app).listen(9000);
console.log("server is running");
