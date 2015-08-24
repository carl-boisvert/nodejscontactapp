var express = require('express');
var router = express.Router();
var db = require('../db/connect');
var User = require('../model/user');

router.post('/',function(req,res){
	var user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
        contacts: []
	});
	user.save(function (err) {
	  if (err) 
	  	console.log('err');
	});
	res.json(user);
});


module.exports = router