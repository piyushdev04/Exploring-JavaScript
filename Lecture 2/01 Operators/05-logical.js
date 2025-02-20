/*
    Logical Operators
    - Logical AND &&
    - Logical OR ||
    - Logical NOT !
*/

let a = 6;
let b = 5;

let cond1 = a > b; // true
let cond2 = a === 6; // true
let cond3 = a < b // false
let cond4 = a === 4; // false


// && [both the condition must be true]
console.log("cond1 && cond2 = ", cond1 && cond2);
console.log("cond1 && cond3 = ", cond1 && cond3);

// || [if one condition is true then it's true]
console.log("cond1 || cond2 = ", cond1 || cond2);
console.log("cond2 || cond3 = ", cond2 || cond3);
console.log("cond3 || cond4 = ", cond3 || cond4);

// ! [True -> False ,, False -> True]
console.log("!(6 < 5) = ", !(a < b));
console.log("!(6 > 5) = ", !(6 > 5));