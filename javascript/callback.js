function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function afterGreet() {
    console.log("Welcome to the JavaScript world!");
}

greet("Alice", afterGreet);