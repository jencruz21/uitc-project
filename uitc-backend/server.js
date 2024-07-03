const express = require('express')
const cors = require('cors')
const pool = require('./db/db')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')

// Express instance
const app = express();
//Port number
const PORT = process.env.PORT

//Route
const FormRoute = require('./routes/FormRoute');
const ConcernsRoute = require('./routes/ConcernsRoute');
const ConcernRoute = require('./routes/ConcernRoute');
const EmailRoute = require('./routes/EmailRoute');
const DeleteConcernRoute = require('./routes/DeleteConcernRoute');
const LoginRoute = require('./routes/LoginRoute');
const SignupRoute = require('./routes/SignupRoute');

//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
dotenv.config();
const verify = require("./verify");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }
})


app.get('/', verify, (req, res) => {
    res.status(200).json({message: "Wrong place mf"})
})

//POST concern
app.post('/form', (req, res) => {
    FormRoute.postForm(req, res, pool);
});

//GET all concerns
app.get('/concerns', verify, (req, res) => {
    ConcernsRoute.getConcerns(req, res, pool);
})

// GET one concern
app.get('/concern/:id', verify, (req, res) => {
    ConcernRoute.getConcern(req, res, pool);
})

//Post email
app.post('/send', verify, (req, res) => {        
    EmailRoute.send(req, res, pool, transporter);
}) 

//Delete concern
app.delete('/delete/:id', verify, (req, res) => {
    DeleteConcernRoute.deleteConcern(req, res, pool);
})

//Post Login
app.post('/login', (req, res) => {
    LoginRoute.login(req, res, pool, jwt, bcrypt);
})

//Post Sign up 
app.post('/signup', (req, res) => {
    SignupRoute.signup(req, res, pool, bcrypt);
})


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})