var express = require('express');
var User = require('../model/user');
var router = express.Router();

router.get("/:id",function(req,res){
    req.user.contacts.forEach(function(element){
        if(element._id == req.params.id){
            res.render('user',{user:element});
        }
    });
});

module.exports = router;