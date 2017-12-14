var mysql = require('mysql');

var client = mysql.createConnection({
	//TODO : DB connect
	user : 'root',
	password : 'sql8439kor!A',
	database : 'farm'
});

module.exports  = client;