var mongoose  = require('mongoose');
var bcrypt         = require('bcrypt');
var Schema    = mongoose.Schema;
const saltRounds = 10;

var login = new Schema({
  username:{type: String, lowercase:true, unique:true, required:true},
  password:{type: String, required:true, minLength:6}
});

login.pre('save', function(next) {
  var a=this;
  bcrypt.hash(a.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    if(err)
    return console.log("unable to hash"+err);
    a.password=hash;
    next();
  });

});

module.exports=mongoose.model('loginm',login);
