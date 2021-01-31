const port = process.env.PORT || 3000
const express = require('express')
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const cors = require('cors');
const app = express()

// require the DB
require(`./config/database`)
require('dotenv').config();


app.use(cors())
app.use(morgan(`dev`))
app.use(express.static(`public`))
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const itemsRouter = require('./routes/items');
const userRouter = require('./routes/user');
// routes
app.use('/items', itemsRouter)
app.use('/user', userRouter)




// NodeMailer
const transporter = nodemailer.createTransport({
    host: process.env.SERVICE,
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.WORD
    }
})
// verifying the connection config
transporter.verify(function(error, success){
    if (error){
        console.log(error)
    } else{
        console.log("== server is ready to take messages ==")
    }
})

app.post('/send', (req, res, next)=>{
    let mail = {
        from: `${req.body.emailState.email}`,
        to: 'codyjsnell@yahoo.com', 
        subject: `Message From ${req.body.emailState.email}`,
        text: `${req.body.emailState.email} says, ${req.body.message.message}`
    }
    transporter.sendMail(mail, (err, data) =>{
        if (err){
            res.json({
                status:'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})



app.listen(port,()=> console.log(`Express is up and running on Port:${port}`))