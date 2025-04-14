const express = require("express");
const { signupValidation, loginValidation } = require("../controllers/middlewares/auth.middleware");
const router = express.Router();

router.post('/login', loginValidation,)
router.post('/signup', signupValidation,)

module.exports = router;