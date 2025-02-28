// Method Overriding in Prototypes

let person = {
    greet: function() {
        console.log("Hello!");
    }
};

let student = {
    greet: function() {
        console.log("Hi, I am a student!");
    }
};

// Set prototype
student.__proto__ = person;

student.greet(); // "Hi, I am student!" (own method is used)