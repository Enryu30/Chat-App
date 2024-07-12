const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  
  senderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true
  },

  receiverId:{
    type:mongoose.Schema.Types.ObjectId,// take the id from the user 
    ref:"User", // reference from User model
    required: true
  },

  message:{
    type:String,
    required:true
  }
}, {timestamps:true} // whenever message is created it will have created at or updated at time fields.
)

const Message = mongoose.model("Message",messageSchema);

module.exports=Message;