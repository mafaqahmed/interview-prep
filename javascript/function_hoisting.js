// ------------------------------ Function Declaration -------------------------------------------------
// myFunction(); // undefined - reference error (but function is hoisted properly)
// var a = 10;
// let b = 20;
// function myFunction() {
//     console.log(a); 
//     console.log(b)
// }

// --------------------------------------- Function Expression -------------------------------------------------
// myFunc1(); // ❌ This will throw an error: "TypeError: myFunc1 is not defined"
// myFunc2(); // ❌ This will throw an error: "Cannot access 'myFunc2' before initialization"
// myFunc3(); // ❌ This will throw an error: "TypeError: myFunc3 is not a function"

// const myFunc2 = function myFunc1() {
//     console.log("Hello from the function expression!");
// };

// var myFunc3 = function myFunc1() {
//     console.log("Hello from the function expression!");
// };
