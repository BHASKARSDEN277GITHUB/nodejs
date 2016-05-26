//require mysql connector module
var connector = require('mysql');

//create new connection
var connection = connector.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'seller_front_revamp',
});

//start the connection
connection.connect(function(err) {
    if (err) {
        console.log(err);
        console.log('Error eastablishing connection with MySql');
    } else {
        console.log('Connection eastablished with MySql successfully');
    }
});

//query MySql
connection.query('select * from sf_panel_property', function(err, rows){
	if(err){
		console.log('error querying the mysql db');
	}else{
		console.log(rows.length);
		console.log(rows);
		console.log(typeof rows); 
	}
});

//terminate the connection
connection.end(function(err) {
    if (err) {
    	console.log('Error terminating connection');
    } else {
    	console.log('Connection terminated successfully');
    }
});