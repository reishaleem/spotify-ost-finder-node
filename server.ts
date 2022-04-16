var http = require("http");

var port = 8080;

var server = http.createServer(function (request: any, response: any) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
