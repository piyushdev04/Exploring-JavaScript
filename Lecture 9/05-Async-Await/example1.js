/*
    What is "async"?
    An async function always returns a promise, even if it doesn't explicity return one.
*/

async function greet() {
    return "Hello, World!";
}

greet().then((message) => console.log(message)); // Output: Hello, World!
// The function automatically wraps the return value in a Promise.


/*
    What is "await"?
    - The await keyword is used inside an async function.
    - It pauses execution until the Promise resolves.
    - It makes asynchronous code look like synchronous code.
*/

async function fetchData() {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("Data Fetched!"), 2000);
    });

    let result = await promise;
    console.log(result);
}

fetchData();
// No ".then()" needed! Code looks clean & readable.