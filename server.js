const port = process.env.PORT || 3000
const express = require('express')
const morgan = require('morgan')

const app = express()
const {postItem,deleteItem,getAllItems}= require('./routes/items')
const {userLogin, userSignup} = require('./routes/user')
// require the DB
require(`./database/database`)

// routes
app.post('/item', postItem)
app.delete('/item/:itemId', deleteItem)
app.get('/', getAllItems)

app.post('./signup', userSignup)
app.post('/login', userLogin)

app.listen(port,()=> console.log(`Express is up and running on Port:${port}`))