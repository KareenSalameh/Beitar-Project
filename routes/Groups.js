const express = require('express');
var router = express.Router();
const groupsController = require('../Controller/Groups');

// Create a new group (POST request)
router.post('/fid/create',groupsController.create);

module.exports = router;