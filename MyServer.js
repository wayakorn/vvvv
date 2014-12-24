var http = require('http');
var router = require('router');
var route = router();

route.get('/', function(req, res) {
	res.writeHead(200);
	res.end('At ROOT');
});
route.get('/{base}', function(req, res) {
	var base = req.params.base; // ex: if the path is /foo/bar, then base = foo

	res.writeHead(80);
	var body = 'Hello World<br>';
	body += base;
	res.end(body);
});


http.createServer(route).listen(80); // start the server on port 80
