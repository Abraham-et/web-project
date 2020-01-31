var express = require('express');
var loginRoute = require('./login.route');
var signupRoute = require('./signup.route')
const routes = express.Router();

routes.use('/', loginRoute);
routes.use('/', signupRoute);

module.exports = routes;