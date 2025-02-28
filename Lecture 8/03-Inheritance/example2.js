/*
    Inheriting Multiple Levels
    - A child class can also act as a parent for another child.

    > Child inherits from Parent, and Parent inherits from GrandParent.
*/

class GrandParent {
    familyName() {
        console.log("We are the Smiths");
    }
}

class Parent extends GrandParent {
    work() {
        console.log("I am an Engineer");
    }
}

class Child extends Parent {
    play() {
        console.log("I love playing video games");
    }
}

let kid = new Child();
kid.familyName();   // Output: We are the Smiths
kid.work();     // Output: I am an Engineer
kid.play();     // Output: I love playing video games