let obj1 = { name: "afaq" }
let obj2 = { name: "afaq" }
let obj3 = { name: "afaq" }
let obj4 = { name: "afaq" }


const myFunc1 = (obj) => { obj.name = "zaeem" } // modifies the object
const myFunc2 = (obj) => { obj = { name: "zaeem" } } // assigns a new object

myFunc1(obj1)
myFunc2(obj2)

console.log(obj1) // { name: 'zaeem' } - original object is modified
console.log(obj2) // { name: 'afaq' } - originl object is not updated

const members3 = [obj3]
const members4 = [obj4]

obj3.name = "zaeem"  // modifies the object
obj4 = { name: "zaeem" } // assigns a new object

console.log(members3) // [{ name: 'zaeem' }] - array is updated with modified object
console.log(members4) // [{ name: 'afaq' }] - array is not updated re-assigned object
