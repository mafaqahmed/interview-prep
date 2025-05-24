// Run each example by commenting all others

// -------------------- Example 01 -----------------------------
// function myFunc(name) {
//     this.name = name;
// }
// myFunc("zaeem") // it would add global.name = zaeem - if function was called with new keyword, global.name wont be created
// console.log(global.name) // prints zaeem
// console.log(name) // prints zaeem - as global variables can be accessed without (global.) - if we have defined a variable with the same name, it would print that value and not the global.name value

// const instance = myFunc("zaeem")
// console.log(instance) // undefined - as myFunc is not returning anything. if you want to get the object with name field in return you would have to call function with new keyword

// -------------------- Example 02 -----------------------------
// function myFunc(name) {
//     this.name = name;
// }
// new myFunc("zaeem") // its returning an object {name: zaeem} and is not updating global because new keyword creates a new object and this in function starts representing this object
// console.log(global.name) // prints undefined
// const instance = new myFunc("zaeem")
// console.log(instance) // {name: zaeem}

// -------------------- Example 03 -----------------------------
// function myFunc(name) {
//     console.log("Inside function ", name)
//     return {name}
// }
// new myFunc("zaeem") // its returning an object {name: zaeem}
// const instance = new myFunc("zaeem")
// console.log(instance) // prints {name: "afaq"} - despite new keyword, functions returns the returned object because it prioritizes returned object over new object.

// -------------------- Example 04 -----------------------------
// function myFunc(name) {
//     console.log("Inside function ", name)
//     return name
// }
// new myFunc("zaeem") // its returning name in strign format
// const instance1 = myFunc("zaeem")
// console.log(instance1) // zaeem

// myFunc.prototype.greet = () => { console.log("hello") }
// const instance2 = new myFunc("zaeem")
// console.log(instance2) // prints {} -new creates an empty object and pass that object in this keyword to the function. the returned value is not an object. So new object is not over-written and is returned as it is
// instance2.greet() // prints hello

// -------------------- Example 05 -----------------------------
// const myFunc = () => {
//     console.log(this) // {} - // it inherits this from its lexical context (i.e., the context in which the function was defined). In this case, it is top level context. hence here this represets module.exports
// }
// myFunc()

// -------------------- Example 06 -----------------------------
// function myFunc() {
//     const myFunc2 = () => { console.log(this) } // it inherits this from its lexical context (i.e., the context in which the function was defined). In this case, it is function context. hence here this represets function level this global object or empty object (new keyword case)
//     myFunc2()
// }
// myFunc() // global object
// new myFunc() // {}
