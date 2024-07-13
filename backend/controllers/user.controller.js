const User = require("../models/user.model");

const getUserForSidebar = async(req,res)=>{
  try {
      const loggedInUserId = req.user._id;

      const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");// not the logged in user

      res.status(200).json(filteredUsers);
  } catch (error) {

    console.log("Error in getUsersforSidebar",error);
    res.status(500).json({error: "Internal Server Error"} );
  }
} 

module.exports = {getUserForSidebar};