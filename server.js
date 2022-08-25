const express = require('express');

const app = express();
app.use(express.json())

app.get('/users', (req, res) => {
    const params = req.query
    res.json(params)
});

app.post('/users/:id', (req, res) => {
    const params = req.params
    res.json(params)
});

app.post('/users', (req, res) => {
    const params = req.body
    res.json(params)
});

app.listen(3001); 