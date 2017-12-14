var express = require('express');
var router = express.Router();

//module create
var client = require('./Data_Base/db.js');
//var update_json = require('update-json')
var fs = require('fs');
var ejs = require('ejs');

router.get('/:something', function(request, response, next){

	var json = fs.readFile('./Data_Base/data.json')
	var data_json = JSON.parse(json)

	console.log(data_json);

	response.render('buyer_check.html', {data : data_json });

});