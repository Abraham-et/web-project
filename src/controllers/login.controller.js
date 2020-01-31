const argon2 = require("argon2");
const bodyParse = require("body-parser");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");



class loginController {


    static async login(req, res, next) {

        return res.status(200).send("hello");
    }
}

module.exports = loginController;