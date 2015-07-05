var http = require("http"),
    path = require("path"),
    fs = require('fs'),
    url = require('url'),
    initialize = require("./serverInitGroup"),
    userGroupString = initialize.initializeGroup();
    
	

function onRequest (request, response) {
    var requestUrl = request.url,
        fileName = requestUrl.slice(1,requestUrl.length),
        extname = path.extname(requestUrl),
		ext = extname.slice(1,extname.length),
		mySwitch,
        typeText;

    if(ext == 'html' ||  ext == 'css' || ext == 'js' || ext == 'png') {
		mySwitch = {
			html: function () {typeText = "text/html"},
			css: function () {typeText = "text/css"},
			js: function () {typeText = "text/js"},
			png: function () {typeText = "text/png"}
		}
		
		mySwitch[ext]();
			
		function send (code, type, data) {
			response.writeHead(code, {'Content-Type': type});
			response.write(data);
			response.end();
		}
		
	    fs.readFile(fileName, function (err, data) {
		    send(200, typeText, data);
        });
	
    } else if (fileName == 'Hello') {
	      send(200, 'text/plain', 'Hello, \n I am SERVER!!!');
    } else if (fileName == 'Ajax') {
	      send(200, 'application/json', userGroupString);
    } else {
	      send(404, "text/plain", "404 \"" + fileName + "\" Not found");
    }
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");