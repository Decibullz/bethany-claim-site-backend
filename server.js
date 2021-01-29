const port = process.env.PORT || 3000
const express = require('express')
const morgan = require('morgan')

const app = express()



app.listen(port,()=> console.log(`Express is up and running on Port:${port}`))