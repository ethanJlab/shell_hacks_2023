import express from 'express';
export const openAIRouter = express.Router();
import * as dotenv from 'dotenv';
dotenv.config();
import {OpenAI} from 'openai';



var envVariables = process.env;
const {
    OPENAI_API_KEY
} = envVariables;

const configuration = new OpenAI ({
    apiKey: OPENAI_API_KEY,
});
const openai = new OpenAI(configuration);
const gpt3Model = "gpt-3.5-turbo";
const gpt4Model = "gpt-4";

// basic gpt4 chatbot functionality
// input: prompt
openAIRouter.post('/gpt4', async (req, res) => {
    var prompt = req.body.prompt;
    var input = req.body.input;

    var response = await openai.chat.completions.create({
        model: gpt4Model,
        messages: [{role: "system", content: prompt}, {role: "user", content: input}],
    });
    console.log(response.choices[0].message.content);
    res.send(response.choices[0].message.content);
});

// basic gpt3 chatbot functionality
// input: prompt
openAIRouter.post('/gpt3', async (req, res) => {
    var prompt = req.body.prompt;
    var input = req.body.input;

    var response = await openai.chat.completions.create({
        model: gpt3Model,
        messages: [{role: "system", content: prompt}, {role: "user", content: input}],
    });
    console.log(response.choices[0].message.content);
    res.send(response.choices[0].message.content);
});

export default openAIRouter;



