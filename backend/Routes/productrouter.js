const Ensureauthenticated = require('../middleware/authhandler');

const router=require('express').Router();

router.get('/',Ensureauthenticated,(req,res)=>{
    console.log('---loggedin user details---',req.user);
 
 
    res.status(200).json([
    {
        name:'mobile',
        price:20000
    },{
        name:'laptop',
        price:30000
    },{
        name:'headphone',
        price:40000
    }
  ])
})


module.exports=router