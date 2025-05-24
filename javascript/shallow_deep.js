// ------------------------------ shallow ------------------------------------
// Original object with nested objects
const original = {
    name: "Alice",
    address: { city: "New York", zip: 10001 }
};

// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, original);

// Modify the nested object in the shallow copy
shallowCopy.address.city = "Los Angeles";

console.log(original.address.city);  // "Los Angeles" (change reflected in the original)
console.log(shallowCopy.address.city);  // "Los Angeles"

// --------------------------- deep ------------------------------------
// // Original object with nested objects
// const original = {
//     name: "Alice",
//     address: { city: "New York", zip: 10001 }
// };

// // Deep copy using a method like JSON.parse() + JSON.stringify()
// const deepCopy = JSON.parse(JSON.stringify(original));

// // Modify the nested object in the deep copy
// deepCopy.address.city = "Los Angeles";

// console.log(original.address.city);  // "New York" (no change in original)
// console.log(deepCopy.address.city);   // "Los Angeles"