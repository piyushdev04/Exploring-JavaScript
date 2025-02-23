/*
    Arrow Functions:
    Compact way of writing a function

    const functionName = (param1, param2) => {
        return a + b;    
    }
*/

// Function to greet a user
const greet = (name) => {
    return `Hello, ${name}! Welcome to JavaScript.`;
};

// Function to find the square of a number
const square = (num) => {
    return num * num;
};

// Function to check is a number is even or odd
const isEven = (num) => {
    if (num % 2 === 0) {
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
};

console.log(greet("Alice"));
console.log("Square of 4:", square(4));
console.log(isEven(7));
console.log(isEven(10));