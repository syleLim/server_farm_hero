var mysql = require('mysql');

var client = mysql.createConnection({
	//TODO : DB connect
	host : 'us-cdbr-iron-east-05.cleardb.net'
	user : 'bf2c3bbc87c230',
	password : 'cceac6ea',
	database : 'heroku_37d0896afc5e7ad'
});

module.exports  = client;