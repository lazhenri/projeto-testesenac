const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send({
        titulo:'times que eu gosto',
        data: "19/11/2021"

    })
})

module.exports = router;