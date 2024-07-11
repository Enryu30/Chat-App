const express = require('express');
const { signup, login, logout } = require('../controllers/auth.controller');

const router = express.Router();


router.get("/signup",signup);

router.get("/login",login);

router.get("/logout",logout);

module.exports = router;


//here we could write the code but it would become too big so we use controllers.