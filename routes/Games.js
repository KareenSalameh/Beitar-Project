const express = require('express');
var router = express.Router();
const gamesController = require('../Controller/Games');

router.get("/games", gamesController.gamesForm);

module.exports = router;