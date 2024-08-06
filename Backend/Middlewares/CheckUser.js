
import { User } from '../Models/User.models.js';
import pkg from 'jsonwebtoken';
const {jwt} = pkg;
export const Checkuser=async(req,res,next)=>{
    const token=req.cookies.jwtCookies;
    if(token){
        jwt.verify(token,"BarnaliAsSecretcode",async(err,response)=>{
            if(err){
                console.log("checkUser error",err);
                res.json({status:false});
             return   next();  
            }
            const user=await User.findById(response.id);
            if(user){
                res.json({status:true,user:user.username});
            }
            else res.json({status:false});
            return next();
        })
    }

    else {
        res.json({status:false});
       return next();
    }
}