const express = require('express');
const router = express.Router();
const controller = require('../controller/equipesController')

router.get("/", controller.getAllEquipes);


module.exports = router;