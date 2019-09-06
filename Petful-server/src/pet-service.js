const Queue = require('./queue');
const data = require('./data')
const dogList = new Queue();
const catList = new Queue();

const PetService = {
  getDog(){
    dogList.enqueue(data.dog)
    return data.dog
  },
  getCat(){
    catList.enqueue(data.cat)
    return data.cat
  },
  deleteCat(){
    catList.dequeue()
  },
  deleteDog(){
    dogList.dequeue()
  }
}

module.exports = PetService