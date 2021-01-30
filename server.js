const port = process.env.PORT || 3000
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')

const app = express()

// require the DB
require(`./database/database`)
require('dotenv').config();

const itemsRouter = require('./routes/items');
// const usersRouter = require('./routes/user');

app.use(morgan(`dev`))
app.use(express.static(`public`))
app.use(express.json());
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}))

// routes
app.use('/items', itemsRouter)



app.listen(port,()=> console.log(`Express is up and running on Port:${port}`))