var express = require('express');
var router = express.Router();

//module create
var client = require('./Data_Base/db.js');
//var update_json = require('update-json')
//var jsonfs = require('jsonfile')
var fs = require('fs');
var ejs = require('ejs');


var isJson = false;


//Get Set up
router.get('/:something', function(request, response, nextS){
	if (body = undefined){
		response.render('buyer.html');
	}else {
		response.render('buyer.html', {data: body});
	}
	
});

router.get('/buyer_check/:something', function(request, response, nexts){
	
	console.log(body);

	fs.readFile('./views/buyer_check.html', 'utf8', function(error, data){		

		response.send(ejs.render(data, { item: body }));
	});
	
});

// Post Set up
router.post('/:something', function(request, response, next){

	body = request.body;
	param = request.params.something;

	var s = new Date()
	var y = s.getFullYear().toString();
	var m = (s.getMonth()+1).toString();
	var d = s.getDate().toString();

	response.redirect('/buyer/buyer_check/'+request.params.something);

});

router.post('/buyer_check/check' ,function(request, response, next){

	console.log('whatthe fuck')

	var s = new Date()
	var y = s.getFullYear().toString();
	var m = (s.getMonth()+1).toString();
	var d = s.getDate().toString();

	//console.log(request.params.something); 

	 // if (isJson){
	 // 	jsoning(request, body, y+m+d)
	 // }


	client.query('Insert Into item ( date, fname, fphone, tname, tphone, address, ordercount, orderoption, sphone ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
		,[ y+m+d, body.fname, body.fphone1+body.fphone2+body.fphone3, body.tname, body.tphone1+body.tphone2+body.tphone3, body.address, body.ordercount, body.orderoption, param],
		function(){
			console.log("insert OK!"+param)
			response.redirect('/buyer/'+param);
	});
}); 


router.post('/buyer_check/reject' ,function(request, response, next){

	var s = new Date();
	var y = s.getFullYear().toString();
	var m = (s.getMonth()+1).toString();
	var d = s.getDate().toString();

	//console.log(request.params.something); 

	response.redirect('/');	
}); 


// var jsoning = function(request, body, day){

// 	var item = {
// 		date : day, fname : body.fname, fphone : (body.fphone1+body.fphone2+body.fphone3), tname : body.tname, tphone : (body.tphone1+body.tphone2+body.tphone3), address : body.address, ordercount : body.ordercount, orderoption : body.orderoption, sphone : param
// 	};

// 	console.log(item);

// 	var stringJson = JSON.stringfy(item) +'\n';

// 	console.log(stringJson);

// 	fs.open('./routes/Data_Base/data.json', 'a', '666', function(err, id){
// 		if(err){
// 			console.log('file err');
// 		}else{
// 			fs.write(id, stringJson, null, 'utf8', function(err){
// 				console.log('file save');
// 			});
// 		}
// 	});
// }

module.exports = router;