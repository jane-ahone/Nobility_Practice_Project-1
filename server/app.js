const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/userRoutes')


const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api/users',userRoutes)

module.exports = app