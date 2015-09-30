var http = require('http');
var summer = require('./summer');
var Point = require('./Point');

var pt = new Point(10,20);
pt.print();

summer.info("this is working son");

http.createServer(function(request,response){
	response.writeHead({
		'Content-Type': 'text/plain'
	});
	response.end('hello world');
}).listen(3000);