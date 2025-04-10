const aiService = require("../services/ai.service")

module.exports.getResponse =  async (req, res) => {
    const prompt = req.query.prompt;

    if(!prompt){
        return res.status(400).json({error: "Prompt is required"})
    }

    const response = await aiService.getResponse(prompt)

    res.send(response)

}