/*
    Synchronous Execution:
    In synchronous programming, the code executes line by line, and each operation waits for
    the previous one to finish before executing the next.
*/

function firstTask() {
    console.log("First task completed");
}

function secondTask() {
    console.log("Second task completed");
}

firstTask();
secondTask();