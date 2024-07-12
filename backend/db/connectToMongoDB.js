const mongoose= require("mongoose");
const dotenv = require('dotenv');
dotenv.config();


const MONGO_DB_URI='mongodb+srv://swarat:Kr24lvcMY72xampr@cluster0.tclfdjf.mongodb.net/chat-app?retryWrites=true&w=majority&appName=Cluster0';

const connectToMongoDB = async()=>{

 try {
   await mongoose.connect(MONGO_DB_URI);
   console.log("Connected to MongoDb");
 } catch (err) {
      console.log("Error connecting to mongodb",err);
 }
}

module.exports = connectToMongoDB;