const express = require("express");
const router = express.Router();

router.post('/login', (req, res) => {
    res.send('Login route')
})
router.post('/signup', (req, res) => {
    res.send('SIGN UP route')
})

module.exports = router;