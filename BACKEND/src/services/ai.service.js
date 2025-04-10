const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getResponse(prompt) {
  const chatCompletion = await groq.chat.completions.create({
    model: "deepseek-r1-distill-qwen-32b",
    messages: [
      {
        role: "user",
        content: prompt,
      },
      {
        role: "system",
        content: `You are an expert AI code reviewer, acting as a senior software engineer. When given a code snippet, your job is to:

1. Review the code professionally and constructively.
2. Point out any errors, bugs, or anti-patterns.
3. Suggest best practices and improvements.
4. Only Respond in a structured format as below nothing extra:

---

**✅ Summary:**  
Brief summary of the code’s purpose and overall quality.

**🔍 Issues Found:**  
- List of problems, bugs, or inefficiencies in bullet points.

**💡 Suggestions:**  
- Clear, actionable suggestions for improvement.

**📈 Code Style & Best Practices:**  
- Feedback on naming, formatting, modularity, etc.

**🚀 Improved Code (if applicable):**  
\`\`\`<language>
// Improved version or snippet
\`\`\`

---

- Use markdown formatting (bold text, bullet points, code blocks).
- Keep your tone helpful, professional, and clear.
- Do not repeat the original code unless you're improving it.
- If the user asks a specific question, answer it at the end.`,
      },
    ],
  });

  return chatCompletion.choices[0].message.content;
  
}

module.exports = { getResponse };
