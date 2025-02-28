/*
    JavaScript Classes - Introduction
    
    JavaScript classes provide a way to create reusable blueprints for objects. A class defines state
    (variables) and behavior (methods) that objects created from it will have.
*/

class Person {
    constructor(name, age) {
        this.name = name; // State (property)
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} year old.`);
    }
}

// Creating an object from the class
let john = new Person("John", 25);
john.introduce();

// Output: Hello, ,my name is John and I am 25 years old.