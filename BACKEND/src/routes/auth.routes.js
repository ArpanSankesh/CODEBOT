const express = require("express");
const { signupValidation, loginValidation } = require("../middlewares/auth.middleware");
const { signup} = require("../controllers/signup.controller")
const { login} = require("../controllers/login.controller")
const router = express.Router();

router.post('/login', loginValidation,login)
router.post('/signup', signupValidation,signup)

module.exports = router;