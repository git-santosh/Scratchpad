let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let Schema = mongoose.Schema;
let enu = {
    values: ['Male','Female']
  , message: 'Gender is required.'
  }
let userModel =(()  =>{
   let _schema = new Schema({
        name :{type:String,lowercase:true},
        userName : {type :String ,required:true ,unique:true,lowercase:true},
        password : {type:String , required:true},
        gender:{type:String,enum:enu},
        admin:{type:Boolean , default:false},
        created_at: Date,
        updated_at: Date
    });
    _schema.pre('save',function (next){
        var user = this;
        console.log('this gets printed third');
        console.log('pre-save hook firing');
        console.log(user.name);
        var currentDate = new Date();
        // change the updated_at field to current date
        user.updated_at = currentDate;
        // if created_at doesn't exist, add to that field
        if (!this.created_at)
        user.created_at = currentDate;
        
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                console.log('Generating password'+hash);
                user.password = hash;
                next();
            });
        });
    }).post('save', function(doc) {
        console.log('%s has been saved', doc._id);
      });
      _schema.pre('validate', function() {
        console.log('this gets printed first');
      });
      _schema.post('validate', function() {
        console.log('this gets printed second');
      });
      _schema.post('save', function() {
        console.log('this gets printed fourth');
      });
    _schema.statics.comparePassword = function(candidatePassword,password, cb) {
        console.log('compare pass'+candidatePassword ,this.password);
        bcrypt.compare(candidatePassword,password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    };
    let User = mongoose.model('User',_schema);
    
    return{
        userModel : User
    };
})();




module.exports = userModel;