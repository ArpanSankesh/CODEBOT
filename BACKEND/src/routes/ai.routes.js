const expreess = require("express");
const router = expreess.Router();

const aiController = require("../controllers/ai.controller")

router.post('/get-review', aiController.getResponse) 

module.exports = router;