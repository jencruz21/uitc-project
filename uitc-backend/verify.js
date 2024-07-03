const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verify = (req, res, next) => {
    const authToken = req.get("x-access-token");
    console.log(authToken)
    if (!authToken) {
        return res.status(401).json({
            message: "DENIED!!"
        });
    }

    try {
        const verified = jwt.verify(authToken, process.env.TOKEN);
        res.user = verified;
        next();
    } catch (error) {
        res.status(400).json({
            message: "Bad request..."
        });
    }
}

module.exports = verify;
