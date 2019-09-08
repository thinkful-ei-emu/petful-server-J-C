const express = require('express')
const PetService = require('./pet-service')
const dogRouter = express.Router()

dogRouter.get('/', (req, res, next)=>{
 PetService.getDog()
 .then(dog=>{
  return res
  .status(200)
  .json(dog)})
  
})
dogRouter.delete('/',(req, res)=>{
  PetService.deleteDog().then(()=>{ return res.status(204).end()})
 

})
module.exports = dogRouter