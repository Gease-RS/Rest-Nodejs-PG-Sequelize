const express = require('express')
const { json } = require('express')
const morgan = require('morgan')

const userRoutes = require('./routes/user')
const eventoRoutes = require('./routes/evento')

const app = express();

app.use(morgan('dev'))
app.use(json())

app.use('/api/user', userRoutes)
app.use('/api/evento', eventoRoutes)

module.exports = app