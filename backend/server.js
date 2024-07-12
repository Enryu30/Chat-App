const express = require('express'); //package imports
const dotenv = require('dotenv');


const authRoutes = require('./routes/auth.route');//file imports
const messageRoutes = require('./routes/message.route');

const connectToMongoDB = require('./db/connectToMongoDB');

const app = express(); // variables
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());//to parse the request


app.get("/",(req,res)=>{
  res.send("Hello World");
})


app.use("/api/auth",authRoutes);

 app.use("/api/messages",messageRoutes);
 


app.listen(PORT,()=>{
  connectToMongoDB();
  console.log(`Server Running on Port ${PORT}`);

})
