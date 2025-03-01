/*
    Asynchronous Programming:
    In synchronous programming, each instruction waits for the previous one to finish before
    executing. This can cause delays if a task takes too long.

    > Asynchronous programming helps by not blocking execution, allowing the next
    instruction to run without waiting.
*/

console.log("Step 1: Start");

setTimeout(() => {
    console.log("Step 2: Aysnc task compeleted after 2 seconds");
}, 2000);

console.log("Step 3: End");