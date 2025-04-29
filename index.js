const express = require('express');
const app = express();

const questions = require('./files');

app.get('/one', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Preview C Code</title>
        </head>
        <body>
            <pre style="font-family: monospace; font-size: 16px;">${questions.one}</pre>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log(`Cheating server running`);
});
