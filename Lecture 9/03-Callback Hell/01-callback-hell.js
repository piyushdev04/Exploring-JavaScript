/*
    Callback Hell (Pyramid of Doom)
    Callback Hell occurs when multiple nested callbacks are stacked below one another, making
    the code hard to read, debug, and manage.

    This is also called the "Pyramid of Doom" because the indentation increases like a pyramid.
*/

console.log("Starting....");

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

// Callback Hell (Pyramid of Doom)
step1(() => {
    step2(() =>{
        step3(() =>{
            console.log("All steps completed!");
        });
    });
});

// alternative approach: Breaking the callback chain

function startProcess() {
    step1(() => step2(() => step3(() => {
        console.log("All steps completed!");
    })));
}

startProcess();
// Better readability; Still nested callbacks