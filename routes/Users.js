const express = require('express');
var router = express.Router();
const userController = require('../Controller/Users');

router.route('/')
    .get(userController.getUsers)
    .post(userController.createUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;