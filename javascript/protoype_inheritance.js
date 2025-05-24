// ----------------------------------------- with prototype --------------------------------------------
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(this.name + " makes a noise");
};

const dog = new Animal("Dog");
dog.speak();

// ----------------------------------------- without prototype ------------------------------------------
function Plant(name) {
    this.name = name;
}
Plant.breath = function() {
    console.log(this.name + " breathes");
};

const sunflower = new Plant("Sunflower");
sunflower.breath(); // Error: cannot inherit with prototype

// ----------------------------- with prototype and return statement ------------------------------------
function Person() {
    return { name: "afaq" }
}

Person.prototype.greet = function() { console.log("Hi") }

const myself = new Person();
myself.hello(); // Error: because in myself the returned object is saved and not object created by new keyword
