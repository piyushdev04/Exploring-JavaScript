/*
    Data Types in JS
    - (Primitive): Number, String, Boolean, Undefined, Null, BigInt, Symbol
    - (Non-primitive): Objects: collection of values.
                       [Arrays, Functions]
*/

// Primitives

let num = 42;                   // Number
let str = "Hello, world!";      // String
let bool = true;                // Boolean
let undef;                      // Undefined
let nul = null;                 // Null
let BigInt = 84984916489n;      // BigInt
let sym = Symbol("id");         // Symbol


// Non-Primitives
// Objects
const student = {
    fullName: "Piyush Bafna", // key:value
    age: 20,
    cgpa: 8.2,
    isPass: true,
};

student ["age"] = student["age"] + 1; // for changing value in object
console.log(student.age);
console.log(student["cgpa"]);
console.log(student.fullName);