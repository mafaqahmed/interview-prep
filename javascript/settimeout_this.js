// ---------------------- normal function --------------------------
// const person = {
//     name: "Alice",
//     greet: function() {
//         setTimeout(function() {
//             console.log(this.name); // ❌ 'this' refers to window (not person)
//         }, 1000);
//     }
// };

// person.greet(); // Output: undefined

// ----------------------- arrow function [IMP] --------------------------------
const person = {
    name: "Alice",
    greet: function() {
        setTimeout(() => {
            console.log(this.name); // ✅ 'this' refers to 'person'
        }, 1000);
    }
};

person.greet(); // Output: "Alice"

