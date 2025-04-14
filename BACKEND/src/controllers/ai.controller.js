const aiService = require("../services/ai.service")

module.exports.getResponse =  async (req, res) => {
    const prompt = req.body.code;

    if(!prompt){
        return res.status(400).json({error: "Prompt is required"})
    }

    const response = await aiService.getResponse(prompt)

    res.send(response)

}