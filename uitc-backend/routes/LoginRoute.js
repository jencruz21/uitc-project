const dotenv = require("dotenv");
dotenv.config();

const login = async (req, res, db, jwt, bcrypt) => {
    const {username, password} = req.body

    if(username === "" || password === "") {
        res.status(400).json({message: "Invalid credentials"});
        return;
    }

    try {
         const sql = 'SELECT username, password FROM admins WHERE username = $1'
         const result = await db.query(sql, [username]);
         const isValid = await bcrypt.compareSync(password, result.rows[0].password)
         if (isValid) {
            const token = await jwt.sign({username: username}, process.env.TOKEN, {expiresIn: 60 * 3600})
            res.status(200)
                .json({
                    message: "200 success",
                    accessToken: token
                });
         } else {
            res.status(400).json({
                message: "Wrong credentials"
            });
         }
    } catch (error) {
        res.status(400).json({
            message: "400 bad request"
        });
    }
}

module.exports = {
    login: login
}