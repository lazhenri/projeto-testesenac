const express = require('express');
const app = express();

app.use(express.json())

const index = require('./routes/index');
const equipes = require('./routes/equipesRoutes');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") // informo que minha API poder ser chamada de qualquer lugar por um browser
    res.header(
        "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept")
    

    next()
});

app.use('/', index);
app.use('/equipes', equipes);

module.exports = app;