// -------------------------- Example 01 --------------------------
// const person = {
//     name: "Alice",
//     greet: function() {
//         console.log(this.name); // 'this' refers to 'person'
//     }
// };

// person.greet(); // Output: "Alice"

// --------------------------- Example 02 ------------------
const person = {
    name: "Alice",
    greet: () => {
        console.log(this); // Output: {} (because 'this' is not bound to 'person')
    }
};

person.greet();