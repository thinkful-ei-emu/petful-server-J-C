const Queue = require('./queue');
const {cats, dogs} = require('./data')
const dogList = new Queue();
const catList = new Queue();

dogs.forEach(dog => { dogList.enqueue(dog) });
cats.forEach(cat => { catList.enqueue(cat) });

const PetService = {
  getDog(){
    if(dogList.isEmpty()){
      dogs.forEach(dog => { dogList.enqueue(dog) });
    }
    return dogList.peek()
  },
  getCat(){
    if(catList.isEmpty()){
      cats.forEach(cat => { catList.enqueue(cat) });
    }
    return catList.peek()
  },
  deleteCat(){
    catList.dequeue()
  },
  deleteDog(){
    dogList.dequeue()
  }
}

module.exports = PetService