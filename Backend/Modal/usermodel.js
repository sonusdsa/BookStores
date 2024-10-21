import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        // "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books…"
    },
    password:{
        type:String,
        required:true,
    },
});
const User=mongoose.model("User",userSchema);
export default User;