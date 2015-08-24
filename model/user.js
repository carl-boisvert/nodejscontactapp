var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var relationship = require("mongoose-relationship");

var UserSchema = new Schema({
    name: String, 
    email: String,
    password: String,
    contacts:  [{ type:Schema.ObjectId, ref:"User" ,childPath:"contacts"}]
});

UserSchema.plugin(relationship, { relationshipPathName:'contacts' });



UserSchema.methods.validPassword = function(password){
    return this.password === password;
}

var User = mongoose.model('User',UserSchema);


module.exports = User;
