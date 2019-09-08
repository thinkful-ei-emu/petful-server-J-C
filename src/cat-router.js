const express = require('express')
const PetService = require('./pet-service')
const catRouter = express.Router()

catRouter.route('/').get((req, res, next) => {
  PetService.getCat().then(cat=>{return res
    .status(200)
    .json(cat)})
  
})

catRouter.route('/').delete((req, res) => {
  PetService.deleteCat().then(()=>{return res.status(204).end()})
  
})

module.exports = catRouter