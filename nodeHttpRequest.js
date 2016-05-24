var http = require('http');
var apiUrl = 'http://localhost:8080/resources/static.json?filter=auth_sellers:e1aaf3:all&offset=0&size=9';
var httpRequest = http.get(apiUrl, function(httpResponse){

                        var responseBody = '';

                        //handle response here
                        console.log(httpResponse.statusCode);

                        //read response chunks
                        httpResponse.on('data', function(chunk){
                                responseBody += chunk;
                        });

                        //print response on to console
                        httpResponse.on('end', function(){
                                console.log(responseBody);
                                var response = JSON.parse(responseBody);
                                console.dir(response);
                        });
                });

//handle request errors
httpRequest.on('error', function(error){
        console.dir(error);
});
