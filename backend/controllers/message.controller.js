const Message = require("../models/message.model");
const Conversation = require('../models/conversation.model');

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    });

    if (!conversation) { // If they are conversing for the first time, create a conversation object.
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    
    const newMessage = new Message({
      senderId: senderId,
      receiverId: receiverId,
      message: message
    });


    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

//SOCKET IO FUNCTTIONALITY WILL GO HERE.




  // this will run in parellel.
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
    console.log(newMessage);

  } catch (error) {
    console.log("Error in sendMessage Controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


const getMessages = async(req,res)=>{
  try {

    const {id:userToChatId} = req.params;
    const senderId = req.user._id; // protect route provides this.

    const conversation = await Conversation.findOne({
      participants:{$all:[senderId, userToChatId]},
    }).populate("messages"); // .populate wont give us the id but the actual messages.
 
    if (!conversation) {
      return res.status(200).json([]);
    }
    

    res.status(200).json(conversation.messages);
    
  } catch (error) {
    console.log("Error in getMessage Controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { sendMessage, getMessages };
