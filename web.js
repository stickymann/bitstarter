var express = require('express');
var fs = require('fs');
var infile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var text = fs.readFileSync(infile);
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
