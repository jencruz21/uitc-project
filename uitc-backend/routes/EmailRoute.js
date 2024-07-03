const send = async (req, res, db, email) => {
    const {to, from, subject, text, created_at} = req.body;
    
    if (to === "" || from === "" || subject === "" || text ==="") {
        res.status(400).json({
            message: "400 bad request"
        });
        return;
    }

    const data = {
        to: to,
        from: from,
        subject: subject,
        text: text
    };

    email.sendMail(data, (error, info) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    try {
        const sql = 'INSERT INTO email_data (to_user, from_user, subject, text, created_at) VALUES ($1, $2, $3, $4, $5);'
        await db.query(sql, [to, from, subject, text, created_at]);
        res.status(200).json({
            message: "Status 200 successfully sent"
        });
    } catch (error) {
        res.status(400).json({
            message: "400 bad request..."
        });
    }
}

module.exports = {
    send: send
}