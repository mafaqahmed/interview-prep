var y = 1;
if (function f() {}) {
    y += typeof f
}
console.log(y) //1undefined


// Inside the if block, typeof f is checked.
// But f is not defined in the outer scope because it was inside the if statement.
// When typeof is used on an undeclared variable, it returns "undefined" instead of throwing an error.
// So, typeof f results in "undefined".
