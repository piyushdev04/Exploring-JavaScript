/*
    Qs 1. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
    Find the average marks of the entire class.
*/

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

// M1: for loop
for (let i = 0; i<marks.length; i++) {
    sum += marks[i];
}

// M2: for-of loop
for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;

console.log(`avg marks of the class = ${avg}`);


/*
    Qs 2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
    All items have an offer of 10% OFF on them. Change the array to store final price after
    applying offer.
*/

let items = [250, 645, 300, 900, 50];

// M1
let i = 0;
for (let val of items) {
    let offer =  val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}

// M2
for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}

console.log(items);