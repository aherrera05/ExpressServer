const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World of express');
});

app.get('/about', (req, res) => {
    res.send('Ths is small Express project! :)');
});

app.get('/contact-us', (req, res) => {
    res.send('My email is aman_hr@hotmail.com');
});

app.listen(port, () => {
console.log(`Server listening on http://localhost:${port}`);
});