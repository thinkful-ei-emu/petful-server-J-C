const express = require('express')
const PetService = require('./pet-service')
const catRouter = express.Router()

catRouter.get('/', (req, res, next)=>{
  const cat =  PetService.getCat()
  return res
  .status(200)
  .json(cat)
})

catRouter.delete('/',(req, res)=>{
  PetService.deleteCat()
  return res.status(204).end()
})

module.exports = catRouter