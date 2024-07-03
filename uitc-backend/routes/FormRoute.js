const postForm = async (req, res, db) => {
    const {fname, lname, mname, email, concern, specific_concern, course, created_at} = req.body;

    if (fname === '' || 
        lname === '' || 
        mname === '' || 
        email === '' || 
        concern === '' || 
        specific_concern === '' || 
        course === '') {
        res.status(400).json({message: '400 bad request...'});
        return;
    }

    try {
        const sql = 'INSERT INTO form_data(fname, lname, mname, email, concern, specific_concern, course, created_at) VALUES($1,$2,$3,$4,$5,$6,$7,$8)';
        const response = await db.query(sql, [fname, lname, mname, email, concern, specific_concern, course, created_at])
        await res.status(200).json(response.rows[0])
    } catch (error) {
        res.status(400).json('400 bad request..')
    }
}

module.exports = {
    postForm: postForm
}