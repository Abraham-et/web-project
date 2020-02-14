const cookieOptions = {
    expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
    //secure: true,
    httpOnly: true,
    //sameSite: true
};


module.exports = cookieOptions