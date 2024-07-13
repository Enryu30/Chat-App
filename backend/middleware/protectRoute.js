const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const cookieParser = require('cookie-parser');
const JWT_SECRET = "eZ7TW67Nx/qQbvz84YJrrlcC4/QMxaQiyb6Gxsw1diM=";


const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized - No token Provided" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    // We used user id while signing so we are going to use that to fetch the details of the user.
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    console.log("User is logged in");

    next(); // this will call the function next in line => sendmessage.

  } catch (error) {
    console.log("Error in protectRoute Middleware", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = protectRoute;
