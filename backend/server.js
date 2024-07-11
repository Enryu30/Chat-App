const authRoutes = require('./routes/auth.route');

const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
  res.send("Hello World");
})

app.use("/api/auth",authRoutes);


app.listen(PORT,()=>{
  console.log(`Server Running on Port ${PORT}`);

})
