/*
    Callbacks:
    A callback is a function passed as an argument to another function. It allows us to run a
    function after another function has finished execution, making it useful for asynchronous
    programming.
*/

// Basic Callback Function
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Calling the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Piyush", sayGoodbye);