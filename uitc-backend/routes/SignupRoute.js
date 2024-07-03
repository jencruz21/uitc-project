const signup = async (req, res, db, bcrypt) => {
    const {username, password} = req.body

    if (username === "" || password === "") {
        res.status(400).json({message: "Invalid credentials!"});
        return;
    }
    try {
        const hash = await bcrypt.hashSync(password)
        const signInSql = 'INSERT INTO admins (username, password) VALUES ($1, $2);'
        await db.query(signInSql, [username, hash])
        res.status(200).json({
            message: "200 successfully signed in"
        });
    } catch (error) {
        res.status(400).json({message: '400 bad request...'})
    }
}

module.exports = {
    signup: signup
}