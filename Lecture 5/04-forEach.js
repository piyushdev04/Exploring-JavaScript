/*
    forEach Loop in Arrays:

    arr.forEach(callBackFunction)
    CallbackFunction: Here, it is a function to execute for each element in the array

    * A callback is a function passed as an argument to another function.


    arr.forEach((val) => {
        console.log(val);
    })
*/

// Example: Printing & Modifying an Array
const fruits = ["Apple", "Banana", "Mango", "Orange"];

// Using forEach to print each fruit
fruits.forEach((fruit) => {
    console.log("Fruit:", fruit);
});

// Using forEach to print each fruit with its index
fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});


// Example: Doubling Numbers in an Array
const numbers = [1, 2, 3, 4, 5];

// Using forEach to double each number and print
numbers.forEach((num) => {
    console.log("Doubled:", num * 2);
});


// Example: For a given array of numbers, print the square of each value using the forEach loop.

let nums = [2, 3, 4, 5, 6];

nums.forEach((num) => {
    console.log(num * num);
});