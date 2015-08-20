var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;
var express = require('express');
var router = express.Router();
var User = require('../model/user');

passport.use(new LocalStrategy(
  function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.get('/',function(req,res){
	res.render('login');
});

router.post('/',passport.authenticate('local', 
	{ 
		  successRedirect: '/contacts',
      failureRedirect: '/login',
      failureFlash: true 
  })
);


module.exports = router;