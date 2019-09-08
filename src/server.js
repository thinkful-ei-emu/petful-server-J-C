const express = require('express');
const cors = require('cors');
const dogRouter = require('./dog-router')
const catRouter = require('./cat-router')
const { NODE_ENV, CLIENT_ORIGIN } = require('./config')
const { PORT } = require('./config')
const app = require('./app')

const app = express();
app.use(cors({
  origin: CLIENT_ORIGIN
}));


app.use('/api/dog', dogRouter)
app.use('/api/cat', catRouter)

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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

app.listen(PORT, () => {
  console.log('Serving on 8080');
});

module.exports = app