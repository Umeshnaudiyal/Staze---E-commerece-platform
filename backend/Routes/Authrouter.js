const router=require('express').Router()
const { login, signup } = require('../controller/authconroller');
const {Loginvalidation,Signupvalidation} =require('../middleware/authvalidation');

router.post('/login',Loginvalidation,login)

router.post('/signup',Signupvalidation,signup)


module.exports=router
