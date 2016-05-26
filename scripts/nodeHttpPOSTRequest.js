//queryString is required to build post-data
//var queryString = require('queryString'); 
var http = require('http');

//specify options for request 
var options = { //for host, http method, headers and other options
	host:'localhost',
	port:9200,
	path:'/testindex/testtype/101', //posting request to elasticsearch running on 9200
	method:'POST',
	headers: {
		'Content-Type':'application/json'
	}
};

//get data to post ready
var postData = {
	'name': 'bhaskar kalia',
	'company': 'snapdeal',
	'city': 'gurgaon',
	'state': 'haryana'
};

//callback for handling response
var callback = function(res){
	var body = '';
	
	res.on('data', function(chunk){
		body += chunk;
	});

	res.on('end', function(){
		console.log(body);
	});
};

//create a http request
var httpRequest = http.request(options, callback);

//post data using post request
httpRequest.write(JSON.stringify(postData));

//end the request
httpRequest.end();


