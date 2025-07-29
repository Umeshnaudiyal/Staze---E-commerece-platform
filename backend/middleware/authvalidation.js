const Joi = require('joi');


const Signupvalidation=(req,res,next)=>{
    const schema=Joi.object({
        firstname:Joi.string().min(5).max(100).required(),
        lastname:Joi.string().min(5).max(100).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(5).max(100).required(),
    })
//object is in the form of string
var {error}=schema.validate(req.body);
if(error){
return res.status(400).json({
    message:'bad request',error
})}
next();
}

const Loginvalidation=(req,res,next)=>{
    const schema=Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(5).max(20).required()
    })

var {error}=schema.validate(req.body);

if(error){
return res.status(400).json({
    message:"bad request"

})}
next();
}
module.exports={
    Loginvalidation,
    Signupvalidation
}