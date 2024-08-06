import { User } from "../Models/User.models.js";
import pkg from 'jsonwebtoken';
const {jwt} = pkg;
const maxAge = 3 * 24 * 60 * 60;
const createToken=(id)=>{
return jwt.sign({id},"BarnaliAsSecretcode",{
    expiresIn:maxAge,
})
};
export const login=async(req,res,next)=>{
  //  res.header("Access-Control-Allow-Origin", "*");
try {
    const{username,password}=req.body;
    const user=await User.login(username,password);
    const token=createToken(user._id);
    res.cookie("jwtCookie",token,{
        httpOnly:false,
        maxAge:maxAge*1000,
    });
    res.status(200).json({user:user._id,staus:true});

} catch (error) {
    console.log("error in login",error);
    
}
}

export const register=async(req,res,next)=>{
   // res.header("Access-Control-Allow-Origin", "*");
   console.log("Inside register backend");
   
    try {
        const{username,password}=req.body;
   const user=await User.create({username,password});
   const token=createToken(user._id);
   res.cookie("jwtCookies",token,{
    withCredentials:true,
    httpOnly:false,
    maxAge:maxAge*1000,
   });
   res.status(201).json({ user: user._id, created: true });
    } catch (error) {
        console.log("register controller error",error);
        
    }
   
}