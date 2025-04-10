const expreess = require("express");
const router = expreess.Router();

const aiService = require("../services/ai.service");

router.get('/get-review', async (req, res) => {
    const promt = req.query.prompt;

    if(!promt){
        return res.status(400).json({error: "Prompt is required"})
    }

    const response = await aiService.getResponse(promt)
})

module.exports = router;