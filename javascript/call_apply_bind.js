//---------------------------------- call ------------------------------------
// Calls a function with an explicitly provided this value. Arguments are provided in comma separated manner
// function greet() {
//     console.log(this.name);
// }

// const person = { name: "Alice" };
// greet.call(person); // Output: "Alice"

// -------------------------------- apply -------------------------------------
// Same as call(), but arguments are passed as an array.
// function greet(city, country) {
//     console.log(`${this.name} from ${city}, ${country}`);
// }

// const person = { name: "Alice" };
// greet.apply(person, ["New York", "USA"]); // Output: "Alice from New York, USA"

// --------------------------------- bind ------------------------------------
// Returns a new function with this permanently bound to a specific object.
// const person = { name: "Alice" };

// function greet() {
//     console.log(this.name);
// }

// const boundGreet = greet.bind(person);
// boundGreet(); // Output: "Alice"
// new boundGreet(); // Output: "undefined"
