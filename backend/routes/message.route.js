const express = require('express');
const { sendMessage, getMessages } = require('../controllers/message.controller');
const protectRoute = require('../middleware/protectRoute');

const router = express.Router();

router.get("/:id", protectRoute, getMessages);//id of receiver.
router.post("/send/:id",protectRoute,sendMessage);

module.exports=router;