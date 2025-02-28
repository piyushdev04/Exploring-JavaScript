/*
    Class Inheritance (Extending a Class)
    Inheritance allows a class to inherit properties and methods from another class using the
    "extends" keywords.
*/

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        console.log(`${this.name} is working.`);
    }
}

// Child class extending Employee
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary); // Calls parent constructor
        this.department = department;
    }

    manage() {
        console.log(`${this.name} manages the ${this.department} department.`);
    }
}

let alice = new Manager("Alice", 50000, "HR");
alice.work(); // Output: Alice is working.
alice.manage(); // Output: Alice manages the HR department.