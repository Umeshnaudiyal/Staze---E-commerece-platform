const Usermodel =require("../Models/user");
const jwt=require("jsonwebtoken");

const bcrypt=require("bcrypt")

const signup=async (req,res)=>{
    try{  
        const {firstname,lastname,email,password,address}=req.body;
        const user=await Usermodel.findOne( {email})
        if(user){
            return res.status(409).json({
                message:'User is already exist , you can login',
                success:false
            })}
            const usermodel=new Usermodel({firstname,lastname,email,password,address});
            usermodel.password=await bcrypt.hash(password,10);
            await usermodel.save();

              res.status(201).json({
                message:'signup successfully',
                success:true
            })
        
     
    }
       catch(err){
            res.status(500).json({
                message:'Internal server error',
                status:false
            })
        }

}

const login=async (req,res)=>{
   
    try{
        const {email,password}=req.body;
        const user=await Usermodel.findOne({email});
        const errmsg="Auth failed email or password is incorrect"
        if(!user){
            return res.status(403).json({
                message:errmsg,
                success:false
            })}
        const ispassequal=await bcrypt.compare(password,user.password);
        if(!ispassequal){
            return res.status(403).json({
                message:errmsg,
                success:false
            })}
          const jwttoken=jwt.sign({email:user.email ,_id:user._id,username:user.firstname+user.lastname},process.env.JWT_SECRET,{expiresIn:'24h'})
           
             res.cookie('token',jwttoken,{maxAge:900000,httpOnly:true}
                
             );
              
            return res.status(200).json({
                message:'login successfully',
                success:true,
                jwttoken,
                email,
                isadmin:user.isadmin,
                name:user.firstname+' '+user.lastname,
                address:user.address
                
            })
        
     
    }
       catch(err){
            res.status(500).json({
                message:'Internal server error',
                status:false
            })
        }

}

module.exports={
    login,
    signup
}
