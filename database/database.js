require('dotenv').config()
const mongoose = require('mongoose')
const connectionURI = process.env.URI 

const db = mongoose.connection

mongoose.connect(connectionURI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
})

db.on('connected', ()=>console.log(`connected to MongoDB @${db.host}:${db.port}`))