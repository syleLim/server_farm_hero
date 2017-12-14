var express = require('express');
var router = express.Router();
var ejs = require('ejs');

var client = require('./Data_Base/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('seller_login.html');
});

router.post('/', function(req, res, next){
    var body = req.body;

    var p1 = req.body.p1.toString();
    var p2 = req.body.p2.toString();
    var p3 = req.body.p3.toString();

    client.query('Select * from seller where sphone ="'+p1+p2+p3+'"', function(err, results){
    	
    	if(results == []){
    		console.log('1');
    		res.render('login_fail.html');
    	}else{
    		res.redirect('/seller/'+p1+p2+p3)
    		//TODO : page move seller -> data request
    	}

    });

});

module.exports = router;
