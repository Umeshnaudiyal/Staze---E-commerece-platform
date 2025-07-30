const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Userschema=new Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isadmin:{
        type:String,
        default:false,
    },   
    address:{
        type:String,
        required:true,
    }
})

const Usermodel=mongoose.model('user',Userschema)
module.exports=Usermodel
