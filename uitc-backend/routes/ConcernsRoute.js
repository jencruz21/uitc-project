const getConcerns = async (req, res, db) => {
    try {
        const sql = 'SELECT * FROM form_data'
        const response = await db.query(sql);
        await res.status(200).json(response.rows);
    } catch (error) {
        res.status(400).json({
            message: "400 Bad request"
        });
    }
}

module.exports = {
    getConcerns: getConcerns
}