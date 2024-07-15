const express = require('express');
const { signup, login, logout } = require('../controllers/auth.controller');

const router = express.Router();


router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

module.exports = router;


//here we could write the code but it would become too big so we use controllers.