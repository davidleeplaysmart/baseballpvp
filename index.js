const express = require('express');
const path = require('path');
const sequelize = require("./config/database").sequelize;

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});
app.use(express.static(path.resolve('./client/build'), {
    maxage: '86400'
}));

app.listen(port, () => console.log(`Baseballpvp is running on port ${port}`));

sequelize
    .authenticate()
    .then(function() {
        console.log('Connection has been established successfully.');
    }, function (err) {
        console.log('Unable to connect to the database:', err);
    });