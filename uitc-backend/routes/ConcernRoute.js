const getConcern = async (req, res, db) => {
    try {
        const {id} = req.body
        const sql = 'SELECT fname, lname, mname, email, concern, specific_concern, course, created_at WHERE id = $1'
        const response = await db.query(sql, [id])
        await res.status(200).json(response.rows[0])
    } catch (error) {
        res.status(400).json('400 bad request...')
    }
}

module.exports = {
    getConcern: getConcern
}