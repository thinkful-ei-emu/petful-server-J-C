const express = require('express');
const cors = require('cors');
const dogRouter = require('./dog-router')
const catRouter = require('./cat-router')
const { NODE_ENV } = require('./config')


const app = express()

app.use(cors())

app.use('/api/dog', dogRouter)
app.use('/api/cat', catRouter)


// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak


app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app;