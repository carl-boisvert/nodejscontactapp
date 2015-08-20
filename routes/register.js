var express = require('express');
var router = express.Router();
var db = require('../db/connect');
var User = require('../model/user');

router.post('/register',function(req,res){
	user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});
	res.json(user);
});


module.exports = router