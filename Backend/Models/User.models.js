import mongoose from "mongoose";

mongoose.connect(`mongodb://localhost:27017/register`)

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export const User=mongoose.model("User",userSchema)