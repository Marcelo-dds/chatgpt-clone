const { Configuration, OpenAIApi } = require("openai");

module.exports = class OpenAI {
    static configuration() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        });

        return new OpenAIApi(configuration);
    }

    static textCompletion({ prompt }) {
        return {
            model: "davinci-002",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        };
    }
};




const response = await openai.completions.create({
    model: "davinci-002",
    prompt: "",
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
});