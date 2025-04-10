const Groq = require('groq-sdk')
const groq = new Groq({apiKey: process.env.GROQ_API_KEY})

async function getResponse(prompt){
    console.log(prompt);
    const chatCompletion =  await groq.chat.completion.create({
        model: "deepseek-r1-distill-qwen-32b",
        message :[
            {
                role : "system",
                content : prompt
            }
        ]
    })

    return chatCompletion.choise[0].message.content

    
}

module.exports = getResponse;