const express = require('express');
var router = express.Router();
const userController = require('../Controller/Users');

router.get("/register", userController.registerForm); // getting /register returns the web of register form
router.post("/register", userController.register); // posting register should follow the function register
router.get("/login", userController.loginForm);
router.post("/login", userController.login);
router.get('/logout',userController.logout);
router.get('/', userController.isLoggedIn, userController.fid);
router.get("/pending", userController.pendingForm);
router.get("/user_maintainance", userController.maintainForm);
router.post("/user_maintainance/quiz", userController.getQuiz);
router.post("/user_maintainance", userController.changeUserStatus);
module.exports = router;