const express = require('express');
const cors = require('cors');
const dogRouter = require('./dog-router')
const catRouter = require('./cat-router')
const { PORT } = require('./config')
const app = require('./app')


app.listen(PORT, () => {
  console.log('Serving on 8080');
});