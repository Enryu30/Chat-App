 const sendMessage = async(req,res)=>{
  console.log("message Sent");
  res.status(200).json({message:"Success"})

  
}

module.exports={sendMessage};