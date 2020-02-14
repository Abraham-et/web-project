var express = require('express');
var loginRoute = require('./login.route');
var signupRoute = require('./signup.route')
const routes = express.Router();
const authMw = require("../../middlewares/auth")

routes.use('/', loginRoute);
routes.use('/', signupRoute);


routes.get('/profile', authMw, function (req, res) {
    res.send("at the profile api")
})
module.exports = routes;