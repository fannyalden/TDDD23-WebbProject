var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

//create a new Schema
var UserSchema = new Schema({

    username: {type: String, lowercase: true, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, lowercase: true, unique: true }
});

//Before saving the Schema, do something. In this case, before saving the password, encrypt it.
UserSchema.pre('save', function(next){

    var user = this;
    bcrypt.hash(user.password, null, null, function(err, hash){
        if(err) return next(err);
        //Store the hash in your password DB
        user.password = hash;
        next();
    });

});


module.exports = mongoose.model('User', UserSchema);