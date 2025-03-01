/*
    What is a Promise?
    A Promise in JavaScript is an object that represents the eventual completion (or failure) of an
    asynchronous operation.

    A Promise has three states:
    1. Pending -> Initial state (not resolved or rejected)
    2. Resolved (Fullfilled) -> The operation was successful
    3. Rejected -> The operation failed
*/

let promise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
        let success = false; // true: resolved; false: rejection

        if (success) {
            resolve("Operation Successful!");
        } else {
            reject("Operation Failed!");
        }
    }, 2000);
});

// Handling the Promise
promise
    .then((result) => console.log("Resolved:", result))
    .catch((error) => console.log("Rejected:", error));