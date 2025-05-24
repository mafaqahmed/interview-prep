function outerFunction() {
    let outerVariable = "I am from the outer function";

    function innerFunction() {
        console.log(outerVariable); // Accesses variable from the outer function
    }

    return innerFunction; // Returns the inner function
}

const closureFunction = outerFunction(); // outerFunction has finished executing
closureFunction(); // Output: "I am from the outer function"