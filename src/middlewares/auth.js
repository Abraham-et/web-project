const jwt = require('jsonwebtoken')
const jwtOptions = require("../config/jwt")



const authMw = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(req.cookies)
    if (!token) {
        return res.status(401).send("not logged in");
    }
    jwt.verify(token, jwtOptions.secret, (error, decoded) => {
        if (error) {
            return res.status(403).send("unauthorized");
        }
        req['userName'] = decoded.id;
        next()
    })
}


module.exports = authMw