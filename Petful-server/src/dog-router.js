const express = require('express')
const PetService = require('./pet-service')
const dogRouter = express.Router()

dogRouter.get('/', (req, res, next)=>{
 const dog = PetService.getDog()
  return res
  .status(200)
  .json(dog)
})
dogRouter.delete( (req, res)=>{
  PetService.deleteDog()
  return res.status(204).end()

})
module.exports = dogRouter