const equipes = require("../models/equipes.json");

const getAllEquipes = (req, res) => {
    console.log(req.url);
    res.status(200).send(equipes);
}

module.exports = {
    getAllEquipes,
}