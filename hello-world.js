var http = require('http');
var fs = require('fs');

// fs.readFile('hello.txt', function(err,data){
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// })

http.createServer(function(request,response){
	response.writeHead({
		'Content-Type': 'text/plain'
	});
	response.end('hello world');
}).listen(3000);

