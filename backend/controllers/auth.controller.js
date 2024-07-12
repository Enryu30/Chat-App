const User = require("../models/user.model");
const bcryptjs= require("bcryptjs");
const generateTokenandCookie = require("../utils/generateToken");
const signup = async(req, res) => {

      try {
        const{fullName,username,password,confirmPassword,gender}=req.body;

        if(password!=confirmPassword){
          return res.status(400).json({error:"Password dont match"});
        } 

        const user = await User.find({username});

        if(!user){
          return res.status(400).json({error:"Username already exists"});
        }

        //Hash Password here
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;



        const newUser = new User({
          fullName:fullName,
          username:username,
          password:hashedPassword,
          gender:gender,
          profilePic: gender==="male"?boyProfilePic:girlProfilePic
        });

        generateTokenandCookie(newUser._id,res);
        await newUser.save();
        console.log("Successfully saved user to the database.");

        res.status(201).json({
          _id: newUser._id,
          fullName:newUser.fullName,
          username: newUser.username,
          profilePic:newUser.profilePic
        })



      } catch (err) {
        console.log("Error in signup controller", err);
        res.status(500).json({error:"Internal Server Error"})
      }



};




const login = async(req, res) => {
  try {
    
  } catch (error) {
    
  }
};


const logout = (req, res) => {
  console.log("logout");
};

module.exports = {
  login,
  signup,
  logout,
};
