const aiService = require("../services/ai.service");

module.exports.getResponse =  async (req, res) => {
    const promt = req.query.prompt;

    if(!promt){
        return res.status(400).json({error: "Prompt is required"})
    }

    const response = await aiService.getResponse(promt)

    res.send(response)
}