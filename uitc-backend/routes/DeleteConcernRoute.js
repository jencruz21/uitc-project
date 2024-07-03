const deleteConcern = async (req, res, db) => {
    const {id} = req.params
    try {
        const sql = 'DELETE FROM form_data WHERE id = $1;'
        const results = await db.query(sql, [id])
        res.status(200).json(results.rows[0])
    } catch(error) {
        res.status(200).json('400 bad request...')
    }
}

module.exports = {
    deleteConcern: deleteConcern
}