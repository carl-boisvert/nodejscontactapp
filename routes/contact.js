var express = require('express');
var User = require('../model/user');
var router = express.Router();


router.get('/', function(req, res) {
    console.log(req.user);
  	res.render('contacts', { user: req.user });
});

router.post('/',function(req, res){
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    user.save();
    //var currentUser = req.user;
    console.log(req.user._id);
    User.findOne({ '_id': req.user._id }, '', function (err, currentUser) {
        if (err) return handleError(err);
        currentUser.contacts.push(user);
        currentUser.save(function (err) {
            if (err)
                console.log('err');
        });
        res.json(currentUser);
    });

});

module.exports = router;