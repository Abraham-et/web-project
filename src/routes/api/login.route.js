
var express = require('express');
var router = express.Router();
var loginController = require('../../controllers/login.controller.js')



router.post('/login', loginController.login);

module.exports = router;