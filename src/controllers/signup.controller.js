var User = require('../database/models/auth.js')
const argon2 = require("argon2");
const crypto = require("crypto");
class signupController {


    static async signup(req, res, next) {

        try {
            const { email, password: plainPassword } = req.body;
            console.log(req.body)
            const salt = crypto.randomBytes(32);
            const password = await argon2.hash(plainPassword, { salt });
            const user1 = { email, password, salt: salt.toString("hex") };
            let user = new User({ userName: user1.email, passWord: password });
            user.save()
            return res.status(200).send("Successfully registered");
        } catch (error) {
            console.log(error)
            return next(error);
        }
    }
}

module.exports = signupController;