var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var fs = require('fs');

var client = require('./Data_Base/db.js');

var isJson = false;

//Get routing
router.get('/:something', function(req, res, next) {
	var something = req.params.something;

	console.log(something);

	fs.readFile('./views/seller_.html', 'utf8', function(error, data){
		console.log('fs is OK!');

		var s = new Date()
		var y = s.getFullYear().toString();
		var m = (s.getMonth()+1).toString();
		var d = s.getDate().toString();

		//client,query('Select count(*) from item where orderoption = "1"', )
		var arr = []

		if (isJson) {
			fs.readFile('./routes/Data_Base/data.json', 'utf8', function(err, data){
				if(err){
					console.log('file read error');
				}

				var strArray = data.split('\n');
				var arrayNum = strArray.length;

				if(strArary.length>0){
					arrayNum.length-1;
				} 

				for(var i=0; i<arrayNum; i++){
					var one = JSON.parse(strArray[i]);
					console.log(one);
				}
			});
		}


		var que_count_1 =  'select Sum(ordercount) As count from item where sphone ='+something+' and orderoption = 1 and date = "'+y+m+d+'"';
		var que_count_2 =  'select Sum(ordercount) As count from item where sphone ='+something+' and orderoption = 2 and date = "'+y+m+d+'"';
		var que_count_3 =  'select Sum(ordercount) As count from item where sphone ='+something+' and orderoption = 3 and date = "'+y+m+d+'"';
		var que_count_4 =  'select Sum(ordercount) As count from item where sphone ='+something+' and orderoption = 4 and date = "'+y+m+d+'"';
		var que_count_5 =  'select Sum(ordercount) As count from item where sphone ='+something+' and orderoption = 5 and date = "'+y+m+d+'"';
		var que_var =  'Select * From item where date ="'+y+m+d+'" And sphone = "'+something+'"';		


		client.query(que_count_1, function(err, results){
			for(var i in results){
				arr.push(results[i]);	
			}
		});
		client.query(que_count_2, function(err, results){
			for(var i in results){
				arr.push(results[i]);	
			}

		});
		client.query(que_count_3, function(err, results){
			for(var i in results){
				arr.push(results[i]);	
			}
		});
		client.query(que_count_4, function(err, results){
			for(var i in results){
				arr.push(results[i]);	
			}
		});
		client.query(que_count_5, function(err, results){
			for(var i in results){
				arr.push(results[i]);	
			}
			//console.log(arr[1]);
		});

		client.query(que_var, function(err, results){
			//console.log(results);

			if(error){
				console.log('query error : '+error);
			}else{

			}

			//console.log(results);
			
			res.send(ejs.render(data, { data_count: arr,
										data_var : results
			}));
		});
	});	
});

router.post('/:something', function(req, res, next){
	fs.readFile('./views/seller_.html', 'utf8', function(error, data){

		//client,query('Select count(*) from item where orderoption = "1"', )
		
		//console.log(typeof(req.body.date));
		//console.log(req.body.date);

		client.query('Select * From item where date ="'+req.body.date+'" and shone="'+req.params.something+'"', function(err, results){
			
			if(error){
				console.log('query error : '+error);
			}else{
				console.log(results);
			}
			
			res.send(ejs.render(data, { data : results}));

		});
	});	
})

module.exports = router;
