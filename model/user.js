var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String, 
	email: String,
	password: String
});

UserSchema.methods.validPassword = function(password){
	return this.password === password;
}

var User = mongoose.model('User',UserSchema);


module.exports = User;
