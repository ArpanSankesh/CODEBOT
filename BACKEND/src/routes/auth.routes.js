const express = require("express");
const { signupValidation, loginValidation } = require("../controllers/middlewares/auth.middleware");
const { signup } = require("../controllers/Auth.controller")
const router = express.Router();

router.post('/login', loginValidation,)
router.post('/signup', signupValidation,signup)

module.exports = router;