/*
    Inheritance:
    Inheritance allows one class (child class) to inherit properties and methods from another class
    (parent class). This helps in reusing code and organizing functionality.

    - class child extends Parent → The Child class inherits from the Parent class.
    - super(name) → Calls the Parent class constructor to initialize "name".
*/

class Parent {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name); // Calls the Parent constructor
        this.age = age;
    }

    introduce() {
        console.log(`I am ${this.name}, and I am ${this.age} year old.`);
    }
}

let child1 = new Child("Alice", 12);
child1.greet(); // Output: Hello, my name is Alice
child1.introduce(); // Output: I am Alice, and I am 12 years old.