function bark() {
    console.log('Woof!');
}
  
bark.animal = 'dog';

const obj1 = new bark()
console.log(obj1) // ?

const obj2 = bark()
console.log(obj2) // ?

console.log(bark.animal) // ?
