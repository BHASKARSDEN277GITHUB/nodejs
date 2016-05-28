var http = require('http');
var dispatcher = require('httpdispatcher');

var port = 8010;
/* callbacks */
var callbacks = {};

callbacks.handleRequest = function(request, response) {
	try{
		dispatcher.dispatch(request, response);
	}catch(e){
		console.log("error dispatching request");
	}

};

callbacks.listenServer = function() {
    //this callback will be called when server is created successfully
    console.log('Server created successfully!');
};

callbacks.homeGet = function(request, response) {
    console.log(request.method);
    response.end("home get");
};

callbacks.homePost = function(request, response) {
	console.log(request.method);
	response.end("home post");
};
/* //callbacks */

//create server
var server = http.createServer(callbacks.handleRequest);

//start the server
server.listen(port, callbacks.listenServer);

//create dispatcher mappings for requests/urls
//dispatcher.setStatic('/resources/static');
//dispatcher.setStaticDirname('static');
//serving static files, tests unsuccessful (throws 404)
dispatcher.onGet('/home', callbacks.homeGet);
dispatcher.onPost('/home', callbacks.homePost);
