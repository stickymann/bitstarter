var express = require('express');
var fs = require('fs');
var infile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	fs.readFile(infile, 'utf8', function (err,data) {
				if (err) {
				response.send(err);
				return;
			}
			response.send(data);
	});
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
