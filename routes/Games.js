const express = require('express');
var router = express.Router();
const gamesController = require('../Controller/Games');

router.get("/games", gamesController.gamesForm);
router.get("/games_maitianance", gamesController.gamesMaintainForm);

// Create a new game (POST request)
router.post('/games_maitianance/create', gamesController.create);

module.exports = router;