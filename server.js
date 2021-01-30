const port = process.env.PORT || 3000
const express = require('express')
const morgan = require('morgan')
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


app.listen(port,()=> console.log(`Express is up and running on Port:${port}`))