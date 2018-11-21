

//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
//Create Schema class
var Schema = mongoose.Schema;

//Create User schema
var UserSchema = new Schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        validate: [
          // Function takes in the value as an argument
        function(input) {
        // If this returns true, proceed. If not, return an error message
        return (input.length >= 6 && input.length <= 20);
         },
        "User id should contain at least 6 characters long and should not contain more than 10 characters."
    ]
      },
   
    password: {
        type: String,
        required: true
    },

})


var Login= mongoose.model("Login", UserSchema);

module.exports = Login;

module.exports.createUser = function(newUser, callback){
    //Use bcrypt to hash password
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    Login.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
    Login.findById(id, callback); //mongoose method
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}