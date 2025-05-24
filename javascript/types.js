// primitive values are stored by value
let a = 5;
let b = a;
console.log(a, b)

// non primitve values are stoed by reference
let objA = { name: "Alice" };
let objB = objA;  // objB is a reference to objA

objB.name = "Bob";  // name property of objA will also be updated
console.log(objA.name); // Bob

// === compares non primitive by reference
let objC = { name: "Alice" };
let objD = { name: "Alice" };

if (objC === objD) {
    console.log("=== does not compare non primitive types by reference")
} else {
    console.log("=== compares non primitive types by reference") // this will run
}

// == compares non primitive by reference
let objE = { name: "Alice" };
let objF = { name: "Alice" };

if (objE == objF) {
    console.log("== does not compare non primitive types by reference")
} else {
    console.log("== compares non primitive types by reference") // this will run
}