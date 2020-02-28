
const mongoose=require('mongoose');
var bcrypt=require('bcryptjs');
const userSchema=mongoose.Schema({
    id:{
        type:String,
        required:"unique ID required",
        unique:true
    },
   name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
       
    },
    email:{
        type:String,
        unique:true,
        required:"Email required"
        
    },
    loginName:{
        type:String,
        required:true
        
    },
    password:{
        type:String,
       required:"Password required", // validations
        minlength:[4,"password must be atleast 4 characters long"]
        
    },
    role:{
        type:String,
        required:true
        
    },
    status:{
        type:String,
        required:true
        
    }
});

userSchema.pre('save',function(next){
    var user=this;
    if(!user.isModified('password')){return next()};
    bcrypt.hash(user.password,10).then((hashedPassword))
    user.password=hashedPassword;
    next()
},function(err){
    next(err)

})
const user=mongoose.model('user',userSchema);
module.exports=user;