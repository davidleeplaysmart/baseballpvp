const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(3001, () => console.log('Baseballpvp is running on port 3001'));