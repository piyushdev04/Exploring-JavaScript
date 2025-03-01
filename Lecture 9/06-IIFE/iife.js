/*
    What is an IIFE?
    An IIFE (Immediately Invoked Function Expression) is a funtion that runs immediately after it
    is defined.
    It doesn't need to be called separately.

    Why Use IIFE?
    > Avoids polluting the global scope (Creates a private scope).
    > Runs the code immediately without requiring a function call.
    > Useful for initializing data & preventing conflicts in large projects.
*/

// Example 1: IIFE with Parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})("Piyush");


// Example 2: IIFE with var, let, const Scope Isolation
var a = 10; // Global variable

(function() {
    var a = 20; // Local to IIFE
    console.log("Inside IIFE:", a); // Output: 20
})();

console.log("Outside IIFE:", a); // Output: 10
// Prevents accidental overwriting of global variables.



// Example 3: IIFE with "async/await"
(async function() {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("Data Fetched!"), 2000);
    });

    let result = await promise;
    console.log(result);
})();
// Runs immediately & handles async operations inside.