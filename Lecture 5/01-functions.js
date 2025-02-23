/*
    Functions:
    Block of code that performs a specific task, can be invoked whenever needed

    * Functions Definition:
        - function functionName() {
            // do some work
        }

        - function functionName(param1, param2...) {
            // do some work
        }

    * Function Call
        - functionName();

    -- fnx params -> like local varibles -> block scope
                     of function
*/

// CALCULATOR FUNCTIONS

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to substract two numbers
function substract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}

// Calling the Functions
console.log("Addition: " + add(5, 3));
console.log("Substraction: " + substract(5, 3));
console.log("Multiplication: " + multiply(5, 3));
console.log("Division: " + divide(6, 3));
console.log("Division: " + divide(6, 0));