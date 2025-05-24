// ----------------------------------  Hoisting ----------------------------------------
// console.log(a); // undefined
// var a = 10;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 20;

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// const c = 30;

// myFunc(); // ReferenceError: Cannot access 'myFunc' before initialization
// const myFunc = () => { console.log("hello") }

// ----------------------------- Scope -----------------------------------
// function test() {
//     if (true) {
//         var x = 10; // Function-scoped
//         let y = 20; // Block-scoped
//         const z = 30; // Block-scoped
//     }
//     console.log(x); // ✅ Works (Function-scoped)
//     console.log(y); // ❌ ReferenceError (Block-scoped)
//     console.log(z); // ❌ ReferenceError (Block-scoped)
// }
// test();

// ------------------------------ Re-declare ------------------------------
// var a = 10;
// var a = 20; // ✅ No error

// let b = 30;
// let b = 40; // ❌ SyntaxError: Identifier 'b' has already been declared

// const c = 50;
// const c = 60; // ❌ SyntaxError: Identifier 'c' has already been declared

// ------------------------------ const with objects --------------------------
const obj = { name: "Alice" };
obj.name = "Bob"; // ✅ Allowed (modifying properties)
obj.lastName = "Alice" // ✅ Allowed (adding new properties)
delete obj.name // ✅ Allowed (deleting properties)

obj = { name: "Charlie" }; // ❌ TypeError (re-assignment not allowed)
