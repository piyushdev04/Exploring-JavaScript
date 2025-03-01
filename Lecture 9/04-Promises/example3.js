/*
    Promise Chaining:
    We can chain multiple ".then()" to execute async operations sequentially.
*/

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 1000);
    });
}

// Promise Chain
step1()
    .then(step2)
    .then(() => console.log("All steps completed!"))
    .catch(() => console.log("Error in process!"));