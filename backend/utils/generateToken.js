const jwt = require('jsonwebtoken');
const JWT_SECRET="eZ7TW67Nx/qQbvz84YJrrlcC4/QMxaQiyb6Gxsw1diM=";


const generateTokenandCookie=(userId,res)=>{
  const token = jwt.sign({userId}, JWT_SECRET,{
    expiresIn:'15d'
  });

  res.cookie("jwt",token,{
    maxAge:15*24*60*60*1000, //millisecond
    httpOnly: true,// prevent xss attacks, users wont be able to access this with js 
    sameSite:"strict",
    /* secure: process.env.NODE_EV !=="development" */
    //this line makes the cookie secure if it is not running on local host.
  });
};

module.exports=generateTokenandCookie;

///created token and as a res we are getting a cookie.
//going to call this after creating an object by parsing,as a response it will send cookie to the browser.