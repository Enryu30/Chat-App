const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({

  participants:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  ],

  messages:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Message",
      default:[]
    }
  ]

},{timestamps:true});

//whenever we are going to use other model then we use types.object id ,ref

//here when we have to create participants we are taking from the user so type will be .id and it will reference from the user.

const Conversation = mongoose.model("Conversation",conversationSchema);

exports.module = Conversation;