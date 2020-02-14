const argon2 = require("argon2");
const bodyParse = require("body-parser");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
var User = require('../database/models/auth.js')
const jwtOptions = require("../config/jwt")
const cookieOptions = require("../config/cookie")

class loginController {


    static async login(req, res, next) {
        const { username, password } = req.body;

        // check user exists and retrieve user
        const user = await User.find({ userName: username })
        console.log(user)
        const correctPassword = await argon2.verify(user[0].passWord, password)

        if (!correctPassword) {
            return res.status(400).json("Incorrect password");
        }
        const token = jwt.sign({ id: user.userName }, jwtOptions.secret, {
            expiresIn: jwtOptions.expiresIn
        });

        res.cookie("access_token", token, cookieOptions);
        return res.status(200).send("Successfully logged in.");



    }
}

module.exports = loginController;