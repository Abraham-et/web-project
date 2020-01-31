
var express = require('express');
var router = express.Router();
var signupController = require('../../controllers/signup.controller.js')



router.post('/signup', signupController.signup);

module.exports = router;