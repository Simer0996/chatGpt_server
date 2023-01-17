const express = require("express");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-ELthWFxkIULbFIbUSvZNFL2Y",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express()

const port = 5000

app.listen(port, () => {
    console.log(`listening to the port http://localhost:${port}`)
})

app.post("/", async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
    res.json({
        data: response.data.choices[0].text
    })
})

// app.get("/", (req, res) => {
//     res.send("hello world")
// })