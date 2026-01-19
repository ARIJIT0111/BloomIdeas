import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router =express.Router();

router.post(`/login`, async(req,res)=>{
   try{
    const { email,password }=req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.status(401).json({success:false,message:"User doesn't Exist"});
    }

    const  checkpassword = await bcrypt.compare(password, user.password);

    if(!checkpassword){
        return res.status(401).json({success:false, message:"Wrong Credentials"})
    }

    const token = jwt.sign({id: user._id}, "secretkeyofbloomideaapp123@#",{expiresIn: "5h"})
    

    return res.status(200).json({success: true,token, user:{name:user.name},message:"login Successfull"})
    
   }catch(error){
    console.log(error.message)
    return res.status(500).json({success: false, message:"Error in login"})
   }
})

export default router;