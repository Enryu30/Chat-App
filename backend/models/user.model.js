const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  gender:{
    type:String,
    required:true,
    enum:["male","female"]  // use when we know there are certain values
  },
  profilePic:{
    type:String,
    default:""
  }
});

const User = mongoose.model("User",userSchema);

module.exports=User;