const express = require('express');
var router = express.Router();
const userController = require('../Controller/Users');

// router.route('/')
//     .get(userController.getUsers)
//     .post(userController.createUser)
//     .patch(userController.updateUser)
//     .delete(userController.deleteUser);

router.get("/register", userController.registerForm);
router.post("/register", userController.register);
router.get("/login", userController.loginForm);
router.post("/login", userController.login);
router.get('/logout',userController.logout);
router.get('/', userController.isLoggedIn, userController.register);
router.get("/pending", userController.pendingForm);

module.exports = router;