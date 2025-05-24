const person = {
    name: "Alice",
    address: { city: "New York", zip: 10001 }
};
Object.freeze(person);

person.name = "afaq" // name property is not updated
console.log(person)

delete person.name  // name property is not deleted
console.log(person)

person.lastName = "Bob" // lastName property is not added
console.log(person)

person.address.code = 100 // added new field as it is nested object
console.log(person)
